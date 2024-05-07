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

app.use(cors()); // CORS 미들웨어 사용

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

const PORT = process.env.PORT || 50001;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
