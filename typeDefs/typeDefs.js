
const {gql} = require('apollo-server-express');


const typeDefs = gql`
    type Post {
        id: ID
        title: String
        content: String
        authorId: ID
    }

    type Query {
        hello: String

        getAllPosts: [Post]
    }

    input PostInput {
        title: String!
        content: String
        authorId: String!
    }

    type Mutation {
        createPost(post: PostInput): Post
    }
    
`;


module.exports = typeDefs;