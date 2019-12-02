const express = require("express");

const app12 = express();

app12.get("/", (req, res) => {
    res.send("Hello word from NodeJS");
});

app12.listen(8012);