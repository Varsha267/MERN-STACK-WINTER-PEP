const ThemeToggle = ({ settoggle }) => {
  const handleclick = () => {
    settoggle((prev) => {
      if (prev === 'light') {
        prev = 'dark';
      } else {
        prev = 'light';
      }

      return prev;
    });
  };

  return <button onClick={handleclick}>click</button>;
};

export default ThemeToggle;
