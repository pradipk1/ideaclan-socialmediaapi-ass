
const { Post } = require('../models/Post');
const jwt = require('jsonwebtoken');
const config = require("../config/config");
const { User } = require('../models/User');


const resolvers = {
    Query: {
        hello: () => {
            return "Hello World";
        },

        getAllPosts: async () => {
            return await Post.find();
        }
    },

    Mutation: {
        createPost: async (parent, args, context, info) => {
            const { title, content } = args.post;
            const { token } = context;
            if(token) {
                try {
                    jwt.verify(token, config.JWT_SECRET_KEY);
                    
                } catch (err) {
                    return res.status(401).send({
                        message: 'Invalid token provided'
                    });
                }
    
                let user = jwt.decode(token);
    
                user = await User.findById(user._id);
    
                user = user.toJSON();
                const authorId = user._id;
                
                const post = new Post({ title, content, authorId });
                await post.save();
                return post;
            }
            
            return;
            // console.log(context);
            // const post = new Post({ title, content, authorId });
            // await post.save();
            // return post;
        },
    },
}

module.exports = resolvers;