const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/Authenticate', Authenticate);

module.exports = router;

function Authenticate(req, res, next) {
    userService.Authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
}