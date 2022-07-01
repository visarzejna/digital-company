// import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Digital<span>Company</span>
        </h3>

        {/* <p className="footer-links">
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
        </p> */}

        <p className="footer-company-name">All copyrights reserved © 2022</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Road 66 Boulevard Bill Clinton</span> Pristina, Republic of
            Kosovo
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+383-44-123-456</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">support@ebooks.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the website</span>
            Digital Company is an organization which aims on integrating advanced design for our costumer products. We want to create something really unique for our clients by going with the saying "Design is where science and art break even" in which our purpose is others satisfaction!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
