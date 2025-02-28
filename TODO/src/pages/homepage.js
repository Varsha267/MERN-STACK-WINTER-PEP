import { Link } from 'react-router';
import '../components/Tododisplay.css';

const Homepage = () => {
  return (
    <>
      <div className="Nav2">
        <h1>Home page</h1>

        <div className="links">
          <h3>
            <Link to="/TodoApp" className="element">
              TodoApp
            </Link>
          </h3>
          <h3>
            <Link to="/DummyRecipies" className="element">
              DummyRecipies
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Homepage;
