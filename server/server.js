const express = require('express');
const users_router = require('./routes/users');
const messages_router = require('./routes/messages');
const convos_router = require('./routes/conversations');
require('dotenv').config();
const connectDB = require('./db/connect');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api/users', users_router);
app.use('/api/messages', messages_router);
app.use('/api/conversations', convos_router);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log(`Connected to Mongo Cluster`)
        app.listen(port, () => {
            console.log(`Server runs on ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()