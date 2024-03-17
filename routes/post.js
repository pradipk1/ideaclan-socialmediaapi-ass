
const createPost = require("../controllers/post");
const authMiddleware = require("../middlewares/auth");

const express = require('express');


const postRouter = express.Router();


postRouter.post('/', authMiddleware, createPost);


module.exports = postRouter;