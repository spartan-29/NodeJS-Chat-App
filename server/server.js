const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);      // integrating socketio with server

// serve static files
app.use(express.static(publicPath));

// Socket IO code
io.on('connection',(socket)=>{
    console.log('New user connected');

    socket.on('disconnect',()=>{
      console.log('Client disconnected');
    });
});

// listen for incoming requests
server.listen(port,()=>{
    console.log(`Server running at port: ${port}`);
});
