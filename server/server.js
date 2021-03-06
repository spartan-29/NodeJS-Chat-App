const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);     // integrating socketio with server

// serve static files
app.use(express.static(publicPath));

// Socket IO code
io.on('connection',(socket)=>{
      console.log('New user connected');

      socket.on('createMessage',(message)=>{
        console.log('Recieved a message: ',message);
      });

      // socket.emit from Admin text Welcome to the chat app
      socket.emit('newMessage',{
         from: 'Admin',
         text: 'Welcome to the Chat App'
      });

      // socket.broadcast.emit from Admin text New User Joined
      socket.broadcast.emit('newMessage',{
         from: 'Admin',
         text: 'New user joined',
         createdAt: new Date().getTime()
      });

      io.emit('newMessage',{
          from: message.from,
          text: message.text,
          createdAt : new Date().getTime()
      });

      // socket.broadcast.emit('newMessage',{
      //     from: message.from,
      //     text: message.text,
      //     createdAt: new Date().getTime()
      // });
    });

    socket.on('disconnect',()=>{
      console.log('Client disconnected');
    });
});

// listen for incoming requests
server.listen(port,()=>{
    console.log(`Server running at port: ${port}`);
});
