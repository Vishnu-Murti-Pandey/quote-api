const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validationToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers?.cookie;
    if (authHeader) {
        token = authHeader.split("=")[1];
    }

    if (!token) {
        res.status(401);
        throw new Error("User not authorized or token is missing in request");
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            res.status(401);
            throw new Error("User is not authorized");
        }
        req.user = decoded.user;
        next();
    });
});

module.exports = validationToken;