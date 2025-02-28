import './Tododisplay.css';
const Tododisplay = ({ data, dooer, date, setdata, filterkey, tittle }) => {
  const filteredArray = data.filter((array) => {
    if (dooer.length > 0) {
      if (dooer !== array.assignment) return false;
    }

    if (date.length > 0) {
      if (date !== array.date) return false;
    }

    if (filterkey !== array.status) return false;

    return true;
  });

  const handledelete = (elem, i) => {
    // const remainingdata = [...data];
    // remainingdata.splice(i, 1);
    // console.log(remainingdata);
    // const conformation = prompt(`Are you sure to delete the task ${elem.name}`);
    // console.log(i);

    setdata((prev) => {
      const newarr = [...prev];
      const i = newarr.findIndex((task) => task.name === elem);
      console.log(i);
      newarr.splice(i, 1);
      // console.log('newarray:', newarr);
      return newarr;
    });
  };

  const handlechange = (element, newstatus, i) => {
    console.log(i);
    setdata((prev) => {
      const newarray = [...prev];
      const taskIndex = newarray.findIndex((task) => task.name === element);
      if (taskIndex !== -1) {
        newarray[taskIndex] = { ...newarray[taskIndex], status: newstatus };
      }
      console.log(newarray[taskIndex]);
      return newarray;
    });
  };

  return (
    <>
      <h1>{tittle}</h1>
      <div className="cards">
        {filteredArray.map((elements, i) => {
          return (
            <div className="card">
              <h3 className="tittle">Task tittle : {elements.name}</h3>
              <p className="date">
                {' '}
                <small>addeed date : {elements.date}</small>
              </p>
              <p className="description">
                <b>Task description : </b>
                {elements.description}
              </p>
              <p className="assinee">
                <b>assigned to : </b>
                {elements.assignment}
              </p>

              {elements.status === 'todo' && (
                <>
                  <button
                    className="button"
                    onClick={() => handlechange(elements.name, 'inProgress', i)}
                  >
                    Accept
                  </button>
                  <button
                    className="button"
                    onClick={() => {
                      handledelete(elements.name, i);
                    }}
                  >
                    Reject
                  </button>
                </>
              )}

              {elements.status === 'inProgress' && (
                <>
                  <button
                    className="button"
                    onClick={() => {
                      handlechange(elements.name, 'done');
                    }}
                  >
                    mark as complete
                  </button>
                </>
              )}

              {elements.status === 'done' && (
                <>
                  <button
                    className="button"
                    onClick={() => {
                      handledelete(elements.name);
                    }}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tododisplay;
