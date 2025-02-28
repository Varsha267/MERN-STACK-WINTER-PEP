const express = require("express");
require("./config/dbConfig.js");
const Task = require("./models/taskModel.js");
const cors = require("cors"); // import cors

const PORT = 1401;

const app = express();

app.use(cors()); // use cord :: NOTE :: it allows all origins to connect
app.use(express.json());

// CUSTOM MIDDLEWARE
app.use((req, res, next) => {
    console.log("-->", req.method, "-->", req.url);
    if (req.url.includes("/tasks") && req.method == "DELETE") {
        res.send("<h1>Terminated for <u>TESTING</u></h1>");
    } else next();
}); // order of execution of middlewares is according to order they are written in the file

app.get("/", (req, res) => {
    res.send(`<h1>Server is running ...</h1>`);
});

// READ
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

// CREATE
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
app.patch("/tasks/:taskId", async (req, res) => {
    try {
        const { taskId } = req.params;
        const { workTitle, assignee, priority, status } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            {
                workTitle,
                assignee,
                priority,
                status,
            },
            {
                returnDocument: "after", // by default: before, it shows the document before update was applied
                runValidators: true, // we want to validate schema on update
            }
        ); 
        if (updatedTask === null) {
            res.status(400).json({
                status: "fail",
                message: "Task ID does not exists!",
            });
        }

        res.status(200).json({
            status: "success",
            data: {
                task: updatedTask,
            },
        });
    } catch (err) {
        console.log("Error in PATCH /tasks", err.message);
        if (err.name === "CastError") {
            res.status(400).json({
                status: "fail",
                message: "Invalid parameter",
            });
        }
        else if (err.name === "ValidationError") {
            res.status(400).json({ status: "fail", message: err.message });
        }
        else {
            res.status(500).json({ status: "fail", message: "Internal Server Error" });
        }
    }
});

// DELETE
app.delete("/tasks/:taskId", async (req, res) => {
    try {
        const { taskId } = req.params;
        const result = await Task.findByIdAndDelete(taskId);
        if (result === null) {
            res.status(400).json({
                status: "fail",
                message: "Task ID does not exists!",
            });
        } else {
            res.status(204).json({
                status: "success",
                data: {
                    result,
                },
            });
        }
    } catch (err) {
        console.log(err.message);
        if (err.name == "CastError") {
            res.status(400).json({
                status: "fail",
                message: "Invalid parameter",
            });
        } else {
            res.status(500).json({
                status: "fail",
                message: "Internal Server Error",
            });
        }
    }
});

app.listen(PORT, () => {
    console.log("------------------------------------------");
    console.log(`--------- http://localhost:${PORT}/ ---------`);
    console.log("------------------------------------------");
});
