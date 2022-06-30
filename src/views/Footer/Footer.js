import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Digital<span>Company</span>
        </h3>

        <p className="footer-links">
          <a href="#" className="link-1">
            <NavLink to="/" exact>
              Home
            </NavLink>
          </a>

          
          <a href="#" className="link-1">
            <NavLink to="/products" exact>
              Our Products
            </NavLink>
          </a>

          <a href="#">
            <NavLink to="/contact-us" exact>
              Contact Us
            </NavLink>
          </a>

          <a href="#">
            <NavLink to="/about" exact>
              About Us
            </NavLink>
          </a>
        </p>

        <p className="footer-company-name">All copyrights reserved © 2022</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa-map-marker"></i>
          <p>
            <span>Road 66 Boulevard Bill Clinton</span> Pristina, Republic of
            Kosovo
          </p>
        </div>

        <div>
          <i className="fa-phone"></i>
          <p>+383-44-123-456</p>
        </div>

        <div>
          <i className="fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">support@ebooks.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the website</span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
