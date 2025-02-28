import { useEffect } from "react";
import "./taskList.css";

const TaskList = ({ taskList, filterAssignee, filterAssignor, filterDeadline }) => {
    const filteredList = taskList.filter((obj) => {
        // TODO complete the filter function
        if (filterDeadline.length > 0) {
            if (filterDeadline === obj.deadline) return true;
            return false;
        } else return true;
    });

    // useEffect(() => {
    //     console.log("::::: NULL dependency array - undefined");
    // }); // undefined dependencies will ALWAYS RUN (You will never want this)

    // useEffect(() => {
    //     console.log("::::: EMPTY dependency array - 0");
    // }, []); // ZERO dependencies will ONLY RUN on FIRST-RENDER :: MOUNTING

    // useEffect(() => {
    //     console.log("::::: dependency array with 'filterAssignee' - 1");
    // }, [filterAssignee]); // ONE dependency will ONLY RUN on FIRST-RENDER  OR  when that dependency value changes

    // useEffect(() => {
    //     console.log("::::: dependency array with 'filterAssignee', 'filterAssignor' -- 2");
    // }, [filterAssignee, filterAssignor]); // TWO dependencies will ONLY RUN on FIRST-RENDER  OR  when any of the dependency value changes

    // useEffect(() => {
    //     console.log("::::: dependency array with 'filterAssignee', 'filterAssignor', 'filterDeadline' -- ALL 3");
    // }, [filterAssignee, filterAssignor, filterDeadline]); // THREE dependencies will ONLY RUN on FIRST-RENDER  OR  when any of the dependency value changes

    return (
        <div className="task-list-main-container">
            <h3>Task List</h3>
            {filteredList.map((elem) => {
                return (
                    <div className="task-list-card">
                        <h4>
                            {elem.workTitle} :: {elem.taskTitle}
                        </h4>
                        <p>Assignee :: {elem.assignee}</p>
                        <p>{elem.deadline}</p>
                        <p>Assignor :: {elem.assignor}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default TaskList;
