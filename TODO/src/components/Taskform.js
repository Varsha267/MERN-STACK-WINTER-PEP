import { useState } from 'react';
import './Taskform.css';
const Taskform = ({ updatedata }) => {
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
    };

    updatedata((prev) => {
      console.log(prev);

      const taskExists = prev.some(
        (task) =>
          Object.is(task.name, obj.name) &&
          Object.is(task.description, obj.description) &&
          Object.is(task.date, obj.date) &&
          Object.is(task.assignment, obj.assignment)
      );

      if (taskExists) {
        return prev;
      }

      const array = [...prev];
      array.push(obj);
      return array;
    });

    setname('');
    setdescription('');
    setdate('');
    setassignment('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tsktittle">
          Task title
          <input
            type="text"
            placeholder="ex: updating ui"
            className="input"
            value={name}
            onChange={handletittle}
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
            <option>Santosh</option>
            <option>Subrahmanyam</option>
            <option>venkat</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Taskform;
