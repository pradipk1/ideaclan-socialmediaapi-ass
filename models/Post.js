
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    content: String,

    authorId: String,
}, {
    timestamps: true
});


const Post = mongoose.model('Post', PostSchema);

module.exports = Post;