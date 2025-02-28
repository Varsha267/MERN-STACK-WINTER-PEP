import { useState } from 'react';
import Taskform from '../components/Taskform';
import Tasklist from '../components/Tasklist';
const Form = () => {
  const [data, setdata] = useState([]);
  return (
    <>
      <Taskform updatedata={setdata} />
      <Tasklist updatedData={data} />
    </>
  );
};

export default Form;
