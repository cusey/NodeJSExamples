var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '_____________________________________' );

const Post = require('../models/post18Model');

exports.getPosts = (req, res) => {
    console.log("getPosts ------")
    res.json({
        posts: [ 
            { title: "First Post"}, 
            {title: "Second Post"}
        ]
    });``
};

exports.createPost = (req, res) => {
    console.log("createPost ------")
    const post = new Post(req.body);
    console.log("CREATING POST: TITLE = " + req.body.title);
};


