const config = require('config.json');
const jwt = require('jsonwebtoken');
const sql = require('mssql');
const sqlConfig = require('../mssql/config');

module.exports = {
    Authenticate
};

async function Authenticate({ username, password }) {

    let pool = await sql.connect(sqlConfig.config);
    let result = await pool.request()
        .input('user_code', sql.VarChar, username).input('login_pwd', sql.VarChar, password)
        .query('SELECT TOP 1 * FROM aut_user AS u WHERE u.user_code = @user_code AND u.login_pwd = @login_pwd');

    if (result.rowsAffected[0] === 0) {
        throw 'Username or password is incorrect';
    }

    let data = result.recordset[0];
    const token = jwt.sign({ sub: data.user_code }, config.secret, { expiresIn: '5' });

    return {
        token,
        data
    };
}