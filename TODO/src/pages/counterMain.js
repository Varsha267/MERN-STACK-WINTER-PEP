import { useState } from 'react';
import Counter from '../components/counter';
import Counterdisplay from '../components/counterdisplay';

const ComponentMain = () => {
  const [data, setdata] = useState(0);
  return (
    <>
      <Counter setdata={setdata} />
      <Counterdisplay data={data} />
    </>
  );
};

export default ComponentMain;
