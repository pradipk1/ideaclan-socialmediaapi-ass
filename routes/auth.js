
const express = require('express');
const { register, login, getLoggedInUser } = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth');

const authRouter = express.Router();


authRouter.post('/register', register);

authRouter.post('/login', login);

authRouter.get('/getLoggedInUser', authMiddleware, getLoggedInUser);


module.exports = authRouter;