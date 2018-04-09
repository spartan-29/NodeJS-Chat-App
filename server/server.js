const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();

// serve static files
app.use(express.static(publicPath));

// listen for incoming requests
app.listen(port,()=>{
    console.log(`Server running at port: ${port}`);
});
