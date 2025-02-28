const express = require("express");
const fsPromises = require("fs/promises");

const app = express();

// GET - '/tasks'
// we are attaching a handler on a route / path
// document.addEventListener("click", (e) => {
//     // do something
// });

app.get("/", (req, res) => {
    res.send("<h1>Hello! <i>Server is running on port 1010</i></h1>");
});

app.get("/tasks", async (req, res) => {
    const fileData = await fsPromises.readFile("./db.json", "utf-8");
    res.send(fileData);
});

app.listen(1010, () => {
    console.log("-------- Server Started ----------");
});
