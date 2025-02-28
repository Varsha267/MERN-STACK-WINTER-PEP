const express = require("express");
require("./config/dbConfig.js");
const Task = require("./models/taskModel.js");

const PORT = 1401;

const app = express();

app.use(express.json()); 


app.get("/", (req, res) => {
    res.send(`<h1>Server is running ...</h1>`);
});

app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200);
        res.json({
            status: "success",
            data: {
                tasks,
            },
        });
    } catch (err) {
        console.log("Error in POST /tasks", err.message);
        res.status(500).json({ status: "fail", message: "Internal Server Error" });
    }
});

app.post("/tasks", async (req, res) => {
    try {
        const taskInfo = req.body;
       const newTask = await Task.create(taskInfo);

        res.status(201); 
        res.json({
            status: "success",
            data: {
                task: newTask,
            },
        });
    } catch (err) {
        console.log("Error in POST /tasks", err.message);
        if (err.name === "ValidationError") {
            res.status(400).json({ status: "fail", message: err.message });
        } else {
            res.status(500).json({ status: "fail", message: "Internal Server Error" });
        }
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});




app.patch("/tasks/:taskId", async (req, res) => {
    try {
    const { taskId } = req.params;
    const taskInfo = req.body;
    
    const updatedTask = Task.findByIdAndUpdate(taskId, taskInfo);
    console.log(updatedTask);
    
    res.status(200).json({
    status: "success",
    data: {
    task: updatedTask,
    },
    });
    } catch (err) {
    console.log("Error in PATCH /tasks", err.message);
    // 1. CastError --> When the id given in the parameter is not in correct format
    // ex. 67a3045357e60ac4df8e08e3 valid, but 67a3045357e60ac4df8e08e this is invalid
    if (err.name === "CastError") {
    res.status(400).json({
    status: "fail",
    message: "Invalid parameter",
    });
    }
    // 2. ValidationError --> If the data sent is not valid as per our schema rules
    else if (err.name === "ValidationError") {
    res.status(400).json({ status: "fail", message: err.message });
    }
    // ex. priority as normal, but we get Normal | price > 1 but we sent 0
    // 3. Generic error that I am not able to think right now
    else {
    res.status(500).json({ status: "fail", message: "Internal Server Error" });
    }
    }
    });