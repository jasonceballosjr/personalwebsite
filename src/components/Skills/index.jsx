import "./style.css";
import React from "react";

const About = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="content">
                <div>
                    <strong>Languages:</strong>
                    <li>JavaScript</li>
                    <li>Solidity</li>
                    <li>Python</li>
                    <li>Swift</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>SQL</li>
                </div>
                <div>
                    <strong>Libraries:</strong>
                    <li>Express.js</li>
                    <li>Web3.js</li>
                    <li>React.js</li>
                    <li>Angular.js</li>
                </div>
                <div>
                    <strong>Cloud:</strong>
                    <li>AWS</li>
                    <li>Some Azure</li>
                </div>

            </div>
        </div>
    );
};

export default About;