const Tasklist = ({ updatedData }) => {
  console.log(updatedData);
  return (
    <>
      <h1>Tasklist</h1>
      {updatedData.map((elements) => {
        return (
          <>
            <h3>Task tittle: {elements.name}</h3>
            <p>
              addeed date: <small>{elements.date}</small>
            </p>
            <p>Task description: {elements.description}</p>
            <p>assigned to : {elements.assignment}</p>
          </>
        );
      })} 
    </>
  );
};

export default Tasklist;
