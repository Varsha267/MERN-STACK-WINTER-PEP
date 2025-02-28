import { useState } from "react";
import "./taskList.css"; //ES6
import PropTypes from "prop-types";

const TaskList = ({ list }) => {
    const [editTask, setEditTask] = useState(-1);
    const [editObject, setEditObject] = useState({});
    console.log("🟡 : editObject:", editObject);
    console.log("🟡 : editTask:", editTask);

    const handleEditField = (key, value) => {
        console.log(key, value);
        setEditObject((prev) => {
            const newObj = { ...prev };
            newObj[key] = value;
            return newObj;
        });
    };

    return (
        <div className="task-list-main">
            <h3 className="task-list-title">Task List</h3>
            <div className="task-list-task-container">
                {list.map((elem, idx) => {
                    // key :: best: unique property on your own, good: index, worst: nothing as key
                    if (editTask === idx) {
                        return (
                            <div key={elem._id} className="task-card">
                                <form>
                                    <div>
                                        <label>Assignee</label>
                                        <input
                                            value={elem.assignee}
                                            onChange={(e) => {
                                                handleEditField("assignee", e.target.value);
                                            }}
                                        />
                                        {/* controlled  input*/}
                                    </div>
                                    <div>
                                        <label>Priority</label>
                                        <input
                                            value={elem.priority}
                                            onChange={(e) => {
                                                handleEditField("priority", e.target.value);
                                            }}
                                        />
                                    </div>
                                </form>
                            </div>
                        );
                    } else {
                        return (
                            <div key={idx} className="task-card">
                                <h5>{idx}</h5>
                                <p>{elem.workTitle}</p>
                                <p>{elem.taskTitle}</p>
                                <p>{elem.assignee}</p>
                                <p>{elem.assignor}</p>
                                <p>{elem.deadline}</p>
                                <p>{elem.priority}</p>
                                <p>{elem.status}</p>
                                <button onClick={() => setEditTask(idx)}>Edit</button>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

// https://legacy.reactjs.org/docs/typechecking-with-proptypes.html
TaskList.propTypes = {
    list: PropTypes.array,
};

export default TaskList;