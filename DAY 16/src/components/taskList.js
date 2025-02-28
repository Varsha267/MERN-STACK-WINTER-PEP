import { useEffect } from "react";
import "./taskList.css";

const TaskList = ({ taskList, filterAssignee, filterAssignor, filterDeadline, setTaskList, title, filterKeyword }) => {
    console.log("🟡 : taskList:", taskList);
    const filteredList = taskList.filter((obj) => {
        // TODO :: complete the filter function
        let flag = true;

        if (filterDeadline.length > 0) {
            if (filterDeadline !== obj.deadline) flag = false;
        }

        if (filterAssignee.length > 0) {
            if (filterAssignee !== obj.assignee) flag = false;
        }
        if (filterAssignor.length > 0) {
            if (filterAssignor !== obj.assignor) flag = false;
        }

        if (filterKeyword !== obj.status) flag = false;

        return flag;
    });

    const handleDelete = (i) => {
        console.log("---deleting---");
        setTaskList((prev) => {
            const newArr = [...prev]; 
            newArr.splice(i, 1);
            return newArr;
        });
    };

    const handleMarkAsDone = (i) => {
        setTaskList((prev) => {
            const newArr = [...prev];
            newArr[i].status = "done";
            return newArr;
        });
    };

    return (
        <div className="task-list-main-container">
            <h3>{title}</h3>
            {filteredList.map((elem, idx) => {
                return (
                    <div className="task-list-card">
                        <h4>
                            {elem.workTitle} :: {elem.taskTitle}
                        </h4>
                        <p>Assignee :: {elem.assignee}</p>
                        <p>{elem.deadline}</p>
                        <p>Assignor :: {elem.assignor}</p>
                        <button onClick={() => handleDelete(idx)}>Delete</button>
                        <button onClick={() => handleMarkAsDone(idx)}>Mark as Done</button>
                    </div>
                );
            })}
        </div>
    );
};

export default TaskList;
