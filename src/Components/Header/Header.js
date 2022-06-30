import React from "react";
import TypeWriter from "react-typewriter";
import { Link } from "react-scroll";

import "./Header.css";

const Header = () => {
  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li>
            <Link
              activeClass="current"
              href="#home"
              to="home"
              spy={true}
              smooth={true}
              offset={-1}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="current"
              href="#about"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="current"
              href="#events"
              to="events"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Events  
            </Link>
          </li>
          <li>
            <Link
              activeClass="current"
              href="#work"
              to="work"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              activeClass="current"
              href="#testimonials"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Testemonials
            </Link>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              <Link
                activeClass="current"
                href="#contact"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter fixed={true} typing={0.5}>Digital Design</TypeWriter>
          </h1>
          <h3>
            Based in Prishtina. <span>Home of the best brands in Kosovo </span>.
            Enhancing digital design. 
          </h3>
          <hr />
          <ul className="social">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="scrolldown">
      <Link
              activeClass="current"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
               <i className="fa fa-arrow-circle-down"></i>
            </Link>
      </p>
    </header>
  );
};

export default Header;
