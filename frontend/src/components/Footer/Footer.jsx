import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-text">
        Copyright 2024 Paul's Schengen Visa Calculator
      </div>
      <div className="social-links">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/pcapobianco/"
              className="linkedin-icon"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://twitter.com/PaulCapo510" className="twitter-icon">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a href="mailto:paulcapob@gmail.com" className="email-icon">
              <i className="fas fa-envelope"></i> Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
