import "./style.css";
import li from '../../pics/li.png';
import gh from '../../pics/gh.png';
import React from "react";
const Footer = () => {
    return (
        <footer>
            {/* change icons */}
            <a
                href="https://github.com/jasonceballosjr"
                target="_blank">
                <img
                    src={gh}//GITHUB icon
                    alt="Github" //throw github icon here
                />
            </a>

            <a className="linkedin"
                href="https://www.linkedin.com/in/jasonceballosjr/"
                target="_blank"
            >
                <img
                    src={li} //LINKEDIN ICON
                    alt="LinkedIn"
                />
            </a>

        </footer>
    );
};

export default Footer;