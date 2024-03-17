
require('dotenv').config();

const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');
const typeDefs = require('./typeDefs/typeDefs');
const resolvers = require('./resolvers/resolvers');
const connectDatabase = require('./database/connectDatabase');
const cors = require('cors');
const config = require('./config/config');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');


const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        // Extract token from request headers
        const token = req.headers.authorization || '';
        // Pass token in the context object
        return { token };
    }
});
const app = express();


app.use(express.json());
app.use(cors());

async function startApolloServer() {
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.post('/graphql', (req, res, next) => {
        next();
    });
}


const port = config.PORT || 4000;

connectDatabase().then(() => {

    startApolloServer().then(() => {
        app.get('/', (req, res) => {
            res.send('Hello from Express!');
        });

        app.use('/auth', authRouter);
        app.use('/post', postRouter);
        

        app.listen(port, () => {
            console.log(`Server listening to http requests on http://localhost:${port}`);
        });
    });

});