import { Link } from "react-router-dom";
import jason from '../../pics/jason.jpg';
import "./style.css";

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi,</p>
                    <p>I am Jason!</p>
                    <p>Aspiring to be in the Cyber Security Field!</p>
                </h1>
                <Link to="about">
                    <button>More Info</button>
                </Link>
            </div>
            <div className="person">
                <img
                    src={jason}
                    alt="person picture"
                />
            </div>
        </div>
    );
};

export default Home;