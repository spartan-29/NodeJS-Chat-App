 var socket = io();

socket.on('connect',function(){
  console.log('Connected to server');
});

socket.on('disconnect',function(){
    console.log('Disconnected from server');
});

socket.on('newMessage',function(newMessage){
    console.log('Recieved a new message: ',newMessage);
});
