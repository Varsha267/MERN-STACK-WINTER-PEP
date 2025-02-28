import { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Dummyrecipies = () => {
  console.log('Start of the function');
  const [data, setdata] = useState([]);

  const getRecipies = async () => {
    const pr = await fetch('https://dummyjson.com/recipes');
    const recipie = await pr.json();

    setdata(recipie.recipes);
  };

  useEffect(() => {
    console.log('Started useeffect running');
    getRecipies();
  }, []);

  console.log('end of the function');

  return (
    <>
      <Link to="/">Home</Link>
      <h1>this is recipes page</h1>
      {console.log(data)}
      {data.map((elem) => {
        return <p>{elem.name}</p>;
      })}
    </>
  );
};

export default Dummyrecipies;
