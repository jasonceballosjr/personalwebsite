import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import me from '../../pics/me.png';
import bars from '../../pics/bars.png';
import cross from '../../pics/cross.png';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    const location = useLocation();

    const trackScreenWidth = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
        if (width > 600) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        if (screenWidth < 600) {
            setOpen(false);
        }
    };

    useEffect(() => {
        trackScreenWidth();
        window.addEventListener("resize", trackScreenWidth);
        return () => window.removeEventListener("resize", trackScreenWidth);
    }, []);

    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                    <Link to="/">
                        <img
                            src={me}
                            alt="brand"
                        />
                    </Link>
                </div>
                <div className="list-wrapper">
                    <img
                        src={bars}
                        alt="Menu bars"
                        style={{ opacity: !open ? 1 : 0 }}
                        onClick={() => {
                            setOpen(!open);
                        }}
                    />
                    <img
                        src={cross}
                        alt="Menu cross"
                        style={{ opacity: open ? 1 : 0 }}
                        onClick={() => {
                            setOpen(!open);
                        }}
                    />

                    <ul style={{ left: open ? "0" : "-100vw" }}>
                        <li>
                            <Link
                                to="/"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/" && "#f04c68" }}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/about" && "#f04c68" }}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/skills"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/skills" && "#f04c68" }}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/works"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/works" && "#f04c68" }}
                            >
                                Works
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/contact" && "#f04c68" }}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
