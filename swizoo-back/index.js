const express = require("express");
const app = express();
const port = 3000;
const connectToDB = require(__dirname + "/db.js");


connectToDB();

app.get("/", (req,res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`server is started on port ${port}`);
})