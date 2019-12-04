var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '_____________________________________' );

const express = require("express");

const app15 = express();

// Bring in routes
const { getPosts15 } = require("./routes/port15")



app15.get("/", getPosts15 );

const port = 8015;

app15.listen(port, () =>{
    console.log("NodeJS is listening on: " + port );
});