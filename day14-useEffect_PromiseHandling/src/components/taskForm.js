// import "./taskForm.css";
// import { useState } from "react";

// const TaskForm = ({ setTaskList }) => {
//     const [workTitle, setWorkTitle] = useState("");
//     const [taskTitle, setTaskTitle] = useState("");
//     const [assignee, setAssignee] = useState("shikha");

//     const handleWorkTitleChange = (e) => {
//         setWorkTitle(e.target.value);
//     };

//     const handleTaskTitleChange = (e) => {
//         setTaskTitle(e.target.value);
//     };

//     const handleSubmitTask = () => {
//         const obj = {};
//         obj.workTitle = workTitle;
//         obj.taskTitle = taskTitle;
//         obj.assignee = assignee;
//         obj.assignor = "varsha";
//         console.log(obj);
//         setTaskList([obj]);
//     };
//     const obj = {
//         workTitle,
//         taskTitle,
//         assignee,
//         assignor: "Likhilesh",
//     };

//     setTaskList((prev) => {
//         const newArr = [...prev];
    
//         newArr.push(obj);
//         return newArr;
//     });

//     return (
//         <div className="task-form">
//             <h3>
//                 Task Form :: {workTitle} :: {taskTitle} :: {assignee}
//             </h3>
//             <div className="form-input-container">
//                 <label>Work Title</label>
//                 <input
//                     type="text"
//                     name="work-title"
//                     placeholder="Type here..."
//                     value={workTitle}
//                     onChange={handleWorkTitleChange}
//                 ></input>
//             </div>
//             <div className="form-input-container">
//                 <label>Task Title</label>
//                 <input
//                     type="text"
//                     name="task-title"
//                     placeholder="Type here..."
//                     value={taskTitle}
//                     onChange={handleTaskTitleChange}
//                 ></input>
//             </div>
//             <div className="form-input-container">
//                 <label>Assignee</label>
//                 <select
//                     value={assignee}
//                     onChange={(e) => {
//                         setAssignee(e.target.value);
//                     }}
//                 >
//                     <option value="Raj">Raj</option>
//                     <option value="Vishal">ram</option>
//                     <option value="Shubhanshu">Shubhanshu</option>
//                 </select>
//             </div>
//             <button onClick={handleSubmitTask}>Add Task</button>
//         </div>
//     );
// };

// export default TaskForm;
import { useState } from "react";
import "./taskForm.css";  

const TaskForm = ({ setTaskList }) => {
    const [workTitle, setWorkTitle] = useState("");
    const [taskTitle, setTaskTitle] = useState("");
    const [assignee, setAssignee] = useState("Raj"); // Default value

    const handleSubmitTask = () => {
        if (!workTitle || !taskTitle) {
            alert("Please fill in all fields.");
            return;
        }

        const obj = {
            workTitle,
            taskTitle,
            assignee,
            assignor: "Varsha",
        };

        setTaskList((prev) => [...prev, obj]); 

        // Reset form fields after submission
        setWorkTitle("");
        setTaskTitle("");
        setAssignee("Raj");
    };

    return (
        <div className="task-form">
            <h3>Task Form</h3>
            <div className="form-input-container">
                <label>Work Title</label>
                <input
                    type="text"
                    placeholder="Type here..."
                    value={workTitle}
                    onChange={(e) => setWorkTitle(e.target.value)}
                />
            </div>
            <div className="form-input-container">
                <label>Task Title</label>
                <input
                    type="text"
                    placeholder="Type here..."
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
            </div>
            <div className="form-input-container">
                <label>Assignee</label>
                <select value={assignee} onChange={(e) => setAssignee(e.target.value)}>
                    <option value="Raj">Raj</option>
                    <option value="Vishal">Vishal</option>
                    <option value="Shubhanshu">Shubhanshu</option>
                </select>
            </div>
            <button onClick={handleSubmitTask}>Add Task</button>
        </div>
    );
};

export default TaskForm;
