import "./style.css";
import gelogo from '../../pics/gelogo.png';
import icstars from '../../pics/ics.png';
import mcbc from '../../pics/mcbc.jpg';
import React from "react";
const About = () => {
    return (
        <div className="works">
            <h1>Experiences</h1>
            <div className="toppart">
                <p>Company: <strong>Molson Coors Beverage Company </strong></p>
                <p>Role: Data Analyst</p>
                <p>Date: 03/2022 - Present</p>
            </div>
            <div className="company">
                <img
                    src={mcbc}
                    alt="i.c.stars |* MILWAUKEE"

                />
            </div>
            <br></br>
            <p>
                <li>Design, develop, deploy, and transition solutions to address business requirements including deciding on integrated data designs across varying platforms from relational to big data.

                </li>
                <li>Constructed a single and authoritative repository of the enterprise’s data through conceptual, logical, and physical data models, as well as data flow diagrams at various levels of detail.

                </li>
                <li>Partnered with the business to drive continuous improvement in data governance practices, leading the implementation including leading education programs around data governance and data quality.

                </li>
                <li>Responsible for syncing the data models to the database so there are no inconsistencies as MCBC transitions everything to the Cloud.
                </li>
            </p>
            <br></br>
            <div className="toppart2">
                <p>Company:<strong> GE Healthcare</strong></p>
                <p>Role: Digital Technology Project Manager Intern</p>
                <p>Date: 07/2021 - 02/2022</p>
            </div>
            <div className="company">
                <img
                    src={gelogo}
                    alt="GE Healthcare"
                />
            </div>
            <p>
                <li>Lead a cross functional team on automating manual data loads and their respective data sources in all modalities within GE Healthcare (Highest Priority).</li>
                <li>Hosted daily standups in CST and IST (India Standard Time) to communicate between teams on updates and progress every 12 hours.</li>
                <li>Oversaw tickets/cases within Salesforce, prioritized each based on the type of issue, deadlines and effort, then communicated across the teams to allocate efforts/resources effectively.</li>
                <li>Structured and delivered a bi-weekly data summary presentation of cases within Salesforce that highlighted changes/progress with the goal to showcase constant improvement overtime to stakeholders and leaders.
                </li>
                <li>Initiated various meetings across various time zones to collaborate with business leaders to simplify currently complex standards of process (SOP) for data.</li>
            </p>
            <br></br>
            <div className="toppart3">
                <p>Company: <strong> i.c.stars *| MILWAUKEE </strong></p>
                <p>Role: Resident, Technical Analyst Intern</p>
                <p>Date: 01/2021 - Current Resident</p>
            </div>
            <div className="company">
                <img
                    src={icstars}
                    alt="i.c.stars |* MILWAUKEE"
                />
            </div>

            <p>
                <li>Initialized the process of designing a wireframe, a workflow model, and using React.js to build a front-end tech portal for all of MCBC (Molson Coors Beverage Company).
                </li>
                <li>Collaborated with the team and end-users to identify requirements, designs, and solutions to our client, MCBC. Reimagine the current client-facing portal to a modern look and organized functionality that engages the user and builds a community for all users.
                </li>
                <li>Communicated with professionals in the IT field, project managers, CIOs, etc.
                </li>
            </p>

            
        </div>

        
    );
};

export default About;