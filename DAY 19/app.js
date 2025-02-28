const express = require("express");
const fsPromises = require("fs/promises");
const PORT = 1010;

const app = express();

app.get("/", (req, res) => {
// dummy api to test if server is working or not
res.send(`<h1>Server is running on PORT : ${PORT}</h1>`);
});

app.listen(PORT, () => {
console.log(`
------- Server Started on PORT : ${PORT} --------
------- link: http://localhost:${PORT}/ ---------
`);
});