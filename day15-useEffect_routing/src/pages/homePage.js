import { Link } from "react-router";

const HomePage = () => {
    return (
        <div>
            <h2>Welcome!!</h2>
            <Link to="/dummy">Dummy TODOs Page</Link>
            <br></br>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    );
};

export default HomePage;
