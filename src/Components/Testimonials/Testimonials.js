import React, { useEffect } from 'react'
import classes from "./Testimonials.module.css";
import clientOneImg from "../../images/img-1.jpeg";
import clientTwoImg from "../../images/img-2.jpeg";
import clientThreeImg from "../../images/img-3.jpeg";
import startFill from "../../images/star-fill.png";
import startNoFill from "../../images/star-no-fill.png";

const Testimonials = () => {
  const fn = () => {
    const wrapper = document.querySelector('.wrapper');
    const indicators = [...document.querySelectorAll('.indicators button')];
  
    let currentTestimonial = 0; // Default 0
  
    indicators.forEach((item, i) => {
        item.addEventListener('click', () => {
            indicators[currentTestimonial].classList.remove(`${classes.active}`);
            wrapper.style.marginLeft = `-${100 * i}%`;
            item.classList.add(`${classes.active}`);
            currentTestimonial = i;
        })
    })
  };

  useEffect(() => {
    fn();
  }, [])
  
  return (
    <div id='testimonials'>
    <div className={classes.testimonials}>
      <h1 className={classes.heading}>Testimonials</h1>
    </div>
    <div className={classes.testimonials}>
      <div className={classes.container}>
        <div className={`wrapper ${classes.wrapper}`}>
          <div className={classes.card}>
            <div className={classes.cardThumb}>
              <img src={clientOneImg} alt="" className={classes.clientImg} />
              <span className={classes.clientName}>Client one</span>
            </div>
            <div className={classes.cardBody}>
              <p className={classes.review}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident. Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?</p>
              <div className={classes.rating}>
                <img src={startFill} className={classes.star} alt="star" />
                <img src={startFill} className={classes.star} alt="star" />
                <img src={startFill} className={classes.star} alt="star" />
                <img src={startFill} className={classes.star} alt="star" />
                <img src={startNoFill} className={classes.star} alt="star" />
             </div>
            </div>
          </div>

          <div className={classes.card}>
            <div className={classes.cardThumb}>
              <img src={clientTwoImg} alt="" className={classes.clientImg} />
              <span className={classes.clientName}>Client two</span>
            </div>
            <div className={classes.cardBody}>
              <p className={classes.review}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident. Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?</p>
              <div className={classes.rating}>
                <img src={startFill} alt="star" className={classes.star} />
                <img src={startFill} alt="star" className={classes.star} />
                <img src={startFill} alt="star" className={classes.star} />
                <img src={startFill} alt="star" className={classes.star} />
                <img src={startNoFill} alt="star" className={classes.star} />
              </div>
            </div>
          </div>

          <div className={classes.card}>
            <div className={classes.cardThumb}>
              <img src={clientThreeImg} alt="" className={classes.clientImg} />
              <span className={classes.clientName}>Client two</span>
            </div>
            <div className={classes.cardBody}>
              <p className={classes.review}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident. Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?</p>
              <div className={classes.rating}>
                <img src={startFill} alt="star" className={classes.star} />
                <img src={startFill} alt="star" className={classes.star} />
                <img src={startFill} alt="star" className={classes.star} />
                <img src={startFill} alt="star" className={classes.star} />
                <img src={startNoFill} alt="star" className={classes.star} />
              </div>
            </div>
          </div>
        </div>

        <div className={`indicators ${classes.indicators}`}>
          <button className={`active ${classes.active}`}></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Testimonials;