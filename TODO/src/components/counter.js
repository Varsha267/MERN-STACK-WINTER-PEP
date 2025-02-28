const Counter = ({ setdata }) => {
  const handleAddClick = () => {
    setdata((prev) => prev + 1);
  };

  const handleRemoveClick = () => {
    setdata((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <>
      <button onClick={handleAddClick}>add</button>
      <button onClick={handleRemoveClick}>remove</button>
    </>
  );
};

export default Counter;
