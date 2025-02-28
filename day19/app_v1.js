const express = require("express");
const fsPromises = require("fs/promises");
const PORT = 1010;

const app = express();

// this is a middleware
// :: it reads the request body, and attach it as a js object to request object
app.use(express.json());

app.get("/", (req, res) => {
    // dummy api to test if server is working or not
    res.send(`<h1>Server is running on PORT : ${PORT}</h1>`);
});

// read the tasks that are there in DB
app.get("/tasks", async (req, res) => {
    // in file like .txt, .cpp, .html, .css :: we write text
    // so when we read the file :: we get text
    const text = await fsPromises.readFile("./db.json");

    // if we want to convert "text in JSON format" to "JS object" :: JSON.parse()
    // if we want to convert "JS object" to "text in JSON format" :: JSON.stringify()
    const obj = JSON.parse(text); // sync process

    // res.send :: generic method to send response where content-type need to explicitly specified by developer
    // res.json :: it is similar to send, but it also adds content-type and serializes the JS Object into JSON String
    res.json(obj);
    // we send the data from backend (server) to frontend (client)
});

// make a new task and add it to the taskList, that is, DB
app.post("/tasks", async (req, res) => {
    // :: to send the data from frontend :: majorly
    // :: in url without query, query (?name=john&surname=doe&age=30), body
    // url has a limit and visible to all (similar with query)
    // body is hidden (secure on https connection)
    // body --> raw format --> json format :: (REST API)
    // ----------------------------------------------------
    // by default, express, does not read the body of the request
    // so, to serialize the incoming requests body, convert it into js object and attach it to req object
    // we use some library like body-parser :: external OR express.json() available in express
    // ----------------------------------------------------
    // 1. you will get the data in request
    const newObj = req.body;
    console.log("newObj:", newObj);

    // 2. read the current list
    const text = await fsPromises.readFile("./db.json", "utf-8"); // reading the db file
    const arr = JSON.parse(text); // converting text into js array / object

    // 3. then append the new data into it
    arr.push(newObj);

    // 4. save the new list
    const textData = JSON.stringify(arr); // converting the js array / object into text
    await fsPromises.writeFile("./db.json", textData); // saving it in the file

    res.json({
        status: "success",
    });
});

app.listen(PORT, () => {
    console.log(`
-------------------------------------------------
------- Server Started on PORT : ${PORT} --------
------- link: http://localhost:${PORT}/ ---------
-------------------------------------------------
`);
});
