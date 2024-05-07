const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); // CORS 미들웨어 추가

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {

    socket.on('chat message', (msg, authuid) => {
        io.emit('chat message', msg, authuid);
    });

    socket.on('chat exit', (user) => {
        io.emit('chat exit', user);
    })
});

const PORT = process.env.PORT || 50001;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
