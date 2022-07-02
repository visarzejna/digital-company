import React from 'react'
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div id="contact">
      <section className={classes.contact}>
  <div className={classes.contactBox}>
    <div className={classes.contactLinks}>
      <h2 className={classes.heading}>CONTACT</h2>
      <div className={classes.links}>
        <div className={classes.link}>
          <a><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" className={classes.img} alt="linkedin" /></a>
        </div>
        <div className={classes.link}>
          <a><img src="https://i.postimg.cc/YCV2QBJg/github.png" className={classes.img} alt="github" /></a>
        </div>
        <div className={classes.link}>
          <a><img src="https://i.postimg.cc/W4Znvrry/codepen.png" className={classes.img} alt="codepen" /></a>
        </div>
        <div className={classes.link}>
          <a><img src="https://i.postimg.cc/NjLfyjPB/email.png" className={classes.img} alt="email" /></a>
        </div>
      </div>
    </div>
    <div className={classes.contactFormWrapper}>
      <form>
        <div className={classes.formItem}>
          <input type="text" name="sender" required />
          <label>Name:</label>
        </div>
        <div className={classes.formItem}>
          <input type="text" name="email" required />
          <label>Email:</label>
        </div>
        <div className={classes.formItem}>
          <textarea class="" name="message" required></textarea>
          <label>Message:</label>
        </div>
        <button className={classes.submitBtn}>Send</button>  
      </form>
    </div>
  </div>
  </section>
    </div>
  )
}

export default Contact;