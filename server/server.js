const express = require('express');
const users_router = require('./routes/users');
const messages_router = require('./routes/messages');
const convos_router = require('./routes/conversations');
const http = require('http');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db/connect');
const { Server } = require('socket.io');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/users', users_router);
app.use('/api/messages', messages_router);
app.use('/api/conversations', convos_router);

const server = http.createServer(app);
// SOCKET IO
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3002',
        methods: ['GET', 'POST'],
    },
});

io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);

    // We can write our socket event listeners in here...
});
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log(`Connected to Mongo Cluster`)
        server.listen(port, () => {
            console.log(`Server runs on ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()