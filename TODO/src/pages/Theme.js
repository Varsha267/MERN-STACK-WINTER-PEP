import { useState } from 'react';
import ThemeDisplay from '../components/ThemeDisplay';
import ThemeToggle from '../components/ThemeToggle';

const Theme = () => {
  const [toggle, settoggle] = useState('light');
  return (
    <>
      <ThemeToggle settoggle={settoggle} />
      <ThemeDisplay toggle={toggle} />
    </>
  );
};

export default Theme;
