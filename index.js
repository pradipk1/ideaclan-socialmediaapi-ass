
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



const app = express();

app.use(express.json());
app.use(cors());



// async function startServer() {
//     const app = express();
//     const apolloServer = new ApolloServer({
//         typeDefs,
//         resolvers,
//     });

//     await apolloServer.start();

//     apolloServer.applyMiddleware({app: app});

//     app.use((req, res) => {
//         res.send("Hello from espress apollo server");
//     })

//     app.listen(8000, () => console.log("Server is running on port 8000"));
// }


app.get('/', (req, res, next) => {

    res.send('Hello there');

    next();
});

app.use('/auth', authRouter);
app.use('/post', postRouter);



connectDatabase().then(() => {
    // startServer();
    app.listen(config.PORT, () => {
        console.log(`Server listening to http requests on http://localhost:${config.PORT}`);
    });
})