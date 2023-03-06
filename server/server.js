const express = require('express');
const path = require('path');
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

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use('/api/users', users_router);
app.use('/api/messages', messages_router);
app.use('/api/conversations', convos_router);


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const server = http.createServer(app);
// SOCKET IO
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);

    socket.on('choose_convers', (data) => {
        console.log('choose_convers', data)
        const { currUser, currConvo } = data
        socket.join(currConvo._id)
    });

    socket.on('send_message', (data) => {
        console.log("send_message", data)
        const { currConvo, value, currUser } = data
        let __createdtime__ = Date.now();

        io.to(currConvo._id).emit('receive_message', {
            conversationId: currConvo._id,
            sender: currUser,
            message: value,
            __createdtime__,
        })
    })
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