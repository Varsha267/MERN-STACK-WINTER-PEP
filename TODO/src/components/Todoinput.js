import { useState } from 'react';
import './Todoinput.css';
const Todoinput = ({ setdata, assignments }) => {
  const [name, setname] = useState('');
  const [description, setdescription] = useState('');
  const [date, setdate] = useState('');
  const [assignment, setassignment] = useState('');

  const handletittle = (e) => {
    setname(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setdescription(e.target.value);
  };

  const handleDateChange = (e) => {
    setdate(e.target.value);
  };

  const handleAssignChange = (e) => {
    setassignment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name,
      description,
      date,
      assignment,
      status: 'todo',
    };

    setdata((prev) => {
      const ifexists = prev.some(
        (task) =>
          Object.is(task.name, obj.name) &&
          Object.is(task.description, obj.description) &&
          Object.is(task.date, obj.date) &&
          Object.is(task.assignment, obj.assignment)
      );

      if (ifexists) {
        alert('this task is already exists');
        return prev;
      }

      const arr = [...prev, obj];
      return arr;
    });

    setname('');
    setdescription('');
    setdate('');
    setassignment('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="taskinputname">
          <h1>Enter Task details</h1>
          <div className="taskinput">
            <label htmlFor="tsktittle">
              Task title
              <input
                type="text"
                placeholder="ex: updating ui"
                className="input"
                value={name}
                onChange={handletittle}
                required
              ></input>
            </label>

            <label htmlFor="description">
              task description
              <textarea
                placeholder="ex: breif decription about the task"
                className="input"
                onChange={handleDescriptionChange}
                value={description}
              ></textarea>
            </label>

            <label htmlFor="data">
              Addigned date
              <input
                type="date"
                id="date"
                className="input"
                onChange={handleDateChange}
                value={date}
              ></input>
            </label>

            <label htmlFor="assigned_to">
              Assigned to
              <select
                className="input"
                onChange={handleAssignChange}
                value={assignment}
              >
                {assignments.map((elem) => {
                  return <option value={elem}>{elem}</option>;
                })}
              </select>
            </label>

            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Todoinput;
