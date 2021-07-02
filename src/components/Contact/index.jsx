import "./style.css";

const About = () => {
    return (
        <div className="contact">
            <h1>Contact me!</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.1426436916854!2d-87.88163848430902!3d43.05946739863701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880518c18a91e1cf%3A0xb734fcfca074ee8f!2sE%20North%20Ave%2C%20Milwaukee%2C%20WI%2053211!5e0!3m2!1sen!2sus!4v1623721642312!5m2!1sen!2sus" //google
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            ></iframe>

            <h4>Contact:</h4>
            <p>Please reach out on LinkedIn!</p>
        </div>
    );
};

export default About;