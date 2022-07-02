import React from 'react'
import classes from './Events.module.css'

const Events = () => {
  return (
    <div className={classes.event}>
      <section className={classes.sec}>
        <div className={classes.leftBox}>
          <div className={classes.content}>
            <h1 className={classes.title}>Upcoming Events and shows</h1>
            <p className={classes.parag}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <div className={classes.events}>
            <ul className={classes.uls}>
              <li className={classes.lis}>
                <div className={classes.time}>
                  <h2 className={classes.h2}>
                    07<br/><span className={classes.span}>July</span>
                  </h2>
                </div>
                <div className={classes.details}>
                  <h3 className={classes.h3}>
                    Where does it come from?
                  </h3>
                  <p className={classes.parag}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin 
                    literature from 45 BC, making it over 2000 years old.
                  </p>
                  <a href="#" className={classes.a}>View Details</a>
                </div>
              </li>
              <li className={classes.lis}>
                <div className={classes.time}>
                  <h2 className={classes.h2}>
                    07<br/><span className={classes.span}>July</span>
                  </h2>
                </div>
                <div className={classes.details}>
                  <h3 className={classes.h3}>
                    Where does it come from?
                  </h3>
                  <p className={classes.parag}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin 
                    literature from 45 BC, making it over 2000 years old.
                  </p>
                  <a href="#" className={classes.a}>View Details</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Events;