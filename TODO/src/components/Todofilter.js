import './Todoinput';

const Todofilter = ({ assignment, settaskdooer, setdate }) => {
  return (
    <div className="div">
      <h2>Apply filters :</h2>
      <select
        onChange={(e) => {
          const todoer = e.target.value;
          settaskdooer(todoer);
        }}
        className="selectinput"
      >
        <option value="">Select Assignee</option>
        {assignment.map((assignee, index) => {
          return (
            <option key={index} value={assignee}>
              {assignee}
            </option>
          );
        })}
      </select>

      <input
        type="date"
        onChange={(e) => {
          setdate(e.target.value);
        }}
        className="selectinput"
      ></input>
    </div>
  );
};

export default Todofilter;
