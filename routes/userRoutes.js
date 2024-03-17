const express = require('express');
const router = express.Router();

const { registerUser, loginUser, currentUser } = require('../controller/userController');
const validationToken = require('../middleware/validationToken');

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/current', validationToken, currentUser);

module.exports = router;