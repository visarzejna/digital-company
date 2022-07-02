import React from "react";
//import video from "./SocialMedia.mp4";
import Slider from "react-slick";
import { Link } from 'react-scroll'

import "./Work.css";
import msh from "./msh-transparent.png";
import rams from "./Rams_logo-transparent.png";
import stadia from "./stadia-transparent.png";
import river from "./River-Transparent.png";
import telegram from "./telegram-transparent.png";
import xo from "./xo-transparent.png";

const Work = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div id="work">
      <div className="work-projects">
        <h1>Our Work</h1>
        <Slider {...settings}>
          <div className="card">
            <div className="imgBox">
              <img src={msh} alt="msh" className="" />
            </div>

            <div className="contentBox">
              <h3>VISUAL BRANDING / WEBSITE</h3>
              <h2 className="price">MSH</h2>
              <a href="#" className="buy">
                Visit
              </a>
            </div>
          </div>
          <div className="card">
            <div className="imgBox">
              <img src={rams} alt=" corsair" className="" />
            </div>

            <div className="contentBox">
              <h3>VISUAL BRANDING / CAMPAIGNS</h3>
              <h2 className="price">Rams</h2>
              <a href="#" className="buy">
                Visit
              </a>
            </div>
          </div>
          <div className="card">
            <div className="imgBox">
              <img src={river} alt=" corsair" className="" />
            </div>

            <div className="contentBox">
              <h3>VISUAL BRANDING</h3>
              <h2 className="price">River</h2>
              <a href="#" className="buy">
                Visit
              </a>
            </div>
          </div>
          <div className="card">
            <div className="imgBox">
              <img src={stadia} alt=" corsair" className="" />
            </div>

            <div className="contentBox">
              <h3>VISUAL BRANDING</h3>
              <h2 className="price">Stadia</h2>
              <a href="#" className="buy">
                Visit
              </a>
            </div>
          </div>
          <div className="card">
            <div className="imgBox">
              <img src={xo} alt=" corsair" className="" />
            </div>

            <div className="contentBox">
              <h3>VISUAL BRANDING</h3>
              <h2 className="price">XO</h2>
              <a href="#" className="buy">
                Visit
              </a>
            </div>
          </div>
          <div className="card">
            <div className="imgBox">
              <img src={telegram} alt=" corsair" className="" />
            </div>

            <div className="contentBox">
              <h3>MARKETING</h3>
              <h2 className="price">Telegram</h2>
              <a href="#" className="buy">
                Visit
              </a>
            </div>
          </div>
        </Slider>
      </div>
      {/* <iframe width="1184" height="666" src="https://www.youtube.com/embed/37vmPbHTl_w" title="Office Interior Design Company " frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      <div className="work-marketing">
        {/*<video width="500" height="auto" loop muted autoPlay>
            <source src={video} type="video/mp4" />
           </video> */}
        <div className="marketing-text">
          <h1>Hire us to build your brand</h1>
          {/* <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
            facere minus dolores soluta sed itaque similique dicta magnam atque
            consequuntur accusantium adipisci vero perferendis, blanditiis neque
            earum consectetur? Aspernatur, voluptatem!
          </h3> */}
          <Link
              activeClass="current"
              className="btn effect04" data-sm-link-text="CONTACT" target="_blank"
              href="#contact"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <span>HIRE US</span>
            </Link>
          
        </div>
      </div>
      
    </div>
  );
};

export default Work;
