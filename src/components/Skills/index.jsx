import "./style.css";

const About = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="content">
                <div>
                    <strong>Languages:</strong>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Swift</li>
                    <li>Java</li>
                    <li>C++</li>
                </div>
                <div>
                    <strong>Libraries:</strong>
                    <li>Express.js</li>
                    <li>Three.js</li>
                    <li>React.js</li>
                </div>
                <div>
                    <strong>Cloud:</strong>
                    <li>AWS Certified</li>
                    <li>Azure Experience</li>
                </div>

            </div>
        </div>
    );
};

export default About;