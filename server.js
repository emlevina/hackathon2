const express = require('express');
const contacts_router = require('./routes/contacts');
require('dotenv').config();
const connectDB = require('./db/connect');
const app = express();
const port = process.env.PORT || 3001;

app.use('/api/contacts', contacts_router);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server runs on ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()