var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '_____________________________________' )

const getPosts14 = (req, res) => {
    res.send("Hello word from NodeJS");
}

module.exports = {
    getPosts14
}