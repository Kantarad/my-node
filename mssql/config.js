const config = {
    user: "scuat",
    password: "Stc@2021",
    server: "172.22.22.23",
    database: "SANTACUBEREHEARSAL",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
};

module.exports = {
    config
};