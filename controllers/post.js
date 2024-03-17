
const { Post } = require("../models/Post");


async function createPost(req, res) {
    try {
        const user = req.user;

        const { title, content } = req.body;

        const post = await Post.create({
            title,
            content,
            authorId: user._id
        });

        return res.send({
            data: post
        })

    } catch (err) {
        return res.status(500).send({
            error: 'Something went wrong'
        })
    }
}


module.exports = createPost;