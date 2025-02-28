import React from "react";

const TaskFilters = ({ assigneeOptions, assignorOptions, setFilterAssignee, setFilterAssignor, setFilterDeadline }) => {
    return (
        <div>
            <div>
                <label>Assignee</label>
                <select
                    name="filter-assignee"
                    onChange={(e) => {
                        setFilterAssignee(e.target.value);
                    }}
                >
                    <option value="">--</option>
                    {assigneeOptions.map((elem) => {
                        return <option value={elem}>{elem}</option>;
                    })}
                </select>
            </div>
            <div>
                <label>Assignor</label>
                <select
                    name="filter-assignor"
                    onChange={(e) => {
                        setFilterAssignor(e.target.value);
                    }}
                >
                    <option value="">--</option>
                    {assignorOptions.map((elem) => {
                        return <option value={elem}>{elem}</option>;
                    })}
                </select>
            </div>
            <div>
                <label>Deadline</label>
                <input
                    type="date"
                    name="filter-deadline"
                    onChange={(e) => {
                        setFilterDeadline(e.target.value);
                    }}
                ></input>
            </div>
        </div>
    );
};

export default TaskFilters;
