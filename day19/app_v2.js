const express = require("express");
const fsPromises = require("fs/promises");
const PORT = 1010;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    // DUMMY API :: to check if server is running...
    res.send(`<h1>Server is running on PORT : ${PORT}</h1>`);
});

app.post("/tasks", async (req, res) => {
    try {
        const newObj = req.body;

        let text = await fsPromises.readFile("./db.json", "utf-8");
        if (text.length == 0) text = "[]";
        const arr = JSON.parse(text);

        let newId = 1;
        if (arr.length !== 0) {
            const lastTask = arr[arr.length - 1];
            newId = lastTask.id;
            newId += 1;
        }
        newObj.id = newId;
        arr.push(newObj);
        const textData = JSON.stringify(arr);
        await fsPromises.writeFile("./db.json", textData);

        res.status(201);
        res.json({
            status: "success",
        });
    } catch (err) {
        console.log("Error in POST TASKS: ", err.message);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
        });
    }
});

// READ
app.get("/tasks", async (req, res) => {
    try {
        const text = await fsPromises.readFile("./db.json");
        const obj = JSON.parse(text);
        res.status(200);
        res.json({
            status: "success",
            data: {
                tasks: obj,
            },
        });
    } catch (err) {
        console.log("Error in GET TASKS: ", err.message);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
        });
    }
});

// UPDATE
app.patch("/tasks/:taskId", async (req, res) => {
    try {
        // 1. Get data from request :: body for changes &
        // we need which data object to change :: request params in the url
        // --> identification mark :: id
        const { taskId } = req.params;
        const { id: tempId, ...updatedTaskInfo } = req.body; // complex destructuring

        // 2. Read the current List from file
        const text = await fsPromises.readFile("./db.json", "utf-8");
        const arr = JSON.parse(text);

        // 3. Find the data object from the array that you want to update (if valid id)
        const foundIndex = arr.findIndex((elem) => {
            if (elem.id == taskId) {
                return true;
            }
            return false;
        });

        if (foundIndex == -1) {
            res.status(400);
            res.json({
                status: "fail",
                message: "Invalid Task Id!",
            });
        } else {
            // 4. change the data that you need to
            const oldTask = arr[foundIndex];
            const finalNewTask = { ...oldTask, ...updatedTaskInfo };
            arr[foundIndex] = finalNewTask;

            // 5. save the updated List as text in the file
            const textData = JSON.stringify(arr);
            await fsPromises.writeFile("./db.json", textData);

            res.status(200);
            res.json({
                status: "success",
                data: {
                    task: finalNewTask,
                },
            });
        }
    } catch (err) {
        console.log("Error in PATCH TASKS: ", err.message);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
        });
    }
});

app.listen(PORT, () => {
    console.log(`
-------------------------------------------------
------- Server Started on PORT : ${PORT} --------
------- link: http://localhost:${PORT}/ ---------
-------------------------------------------------
`);
});
