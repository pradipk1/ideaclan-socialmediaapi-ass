
const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');
const typeDefs = require('./typeDefs/typeDefs');
const resolvers = require('./resolvers/resolvers');
const connectDatabase = require('./database/connectDatabase');



async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({app: app});

    app.use((req, res) => {
        res.send("Hello from espress apollo server");
    })

    app.listen(8000, () => console.log("Server is running on port 8000"));
}



connectDatabase().then(() => {
    startServer();
})