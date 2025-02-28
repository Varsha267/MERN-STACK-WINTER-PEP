import "./taskForm.css";

// uncontrolled components
const TaskForm = ({ setTaskList, assigneeOptions }) => {
    const handleSubmitTask = (e) => {
        e.preventDefault();

        const obj = {
            workTitle: e.target[0].value,
            taskTitle: e.target[1].value,
            assignee: e.target[2].value,
            deadline: e.target[3].value,
            assignor: "Likhilesh",
            status: "todo",
        };

        setTaskList((prev) => {
            // logic
            // then return new state
            const newArr = [...prev]; // after this line, values remain the same,
            //                           new reference is returned so that react understand that array has changed
            newArr.push(obj);
            return newArr;
        });
    };

    return (
        // we use it on form
        <form onSubmit={handleSubmitTask} className="task-form">
            <h3>Task Form</h3>
            <div className="form-input-container">
                <label>Work Title</label>
                <input type="text" name="work-title" placeholder="Type here..."></input>
            </div>
            <div className="form-input-container">
                <label>Task Title</label>
                <input type="text" name="task-title" placeholder="Type here..." required></input>
            </div>
            <div className="form-input-container">
                <label>Assignee</label>
                <select>
                    {/* <option value="Raj">Raj</option>
                    <option value="Vishal">Vishal</option>
                    <option value="Shubhanshu">Shubhanshu</option> */}
                    {assigneeOptions.map((name) => {
                        return <option value={name}>{name}</option>;
                    })}
                </select>
            </div>
            <div className="form-input-container">
                <label>Deadline</label>
                <input type="date" name="deadline"></input>
            </div>
            <button>Add Task</button>
        </form>
    );
};

export default TaskForm;
