import classes from "./About.module.css";
// import Footer from "../Footer/Footer";

const About = () => {
     return (
        <div id="about">
            <div className={classes.ourcompany}>
                <div className={classes.aboutsection}>
                    <div className={classes.innercontainer}>
                        <h1>What is this website all about?</h1>
                        <p className={classes.text}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        <div className={classes.skills}>
                            <span>Lorem ipsum dolor sit amet?</span>
                            <span>Ut enim ad minim veniam?</span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
        /*
        <div class="about">
            <div className="container text-center">
                <br/>
                <b><i><h2 className="thin">The best place to tell people why we're here</h2></i></b>
                <p className="text-muted">
                    The difference between involvement and commitment is like an eggs-and-ham breakfast:<br/>
                    the chicken was <b>involved</b>, the pig was <b><i>commited.</i></b>
                </p>
            </div>
            <div className="jumbotron top-space">
                <div className="container">
                    <b><i><h3 className="text-center thin">~ What makes this community tick? ~</h3></i></b><br/><br/>
                    <div className="row">
                        <div class="col-md-3 col-sm-6 highlight">
                            <div class="h-caption"><h4>Company</h4></div>
                            <div class="h-body text-center">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquid adipisci aspernatur. Soluta quisquam dignissimos earum quasi voluptate. Amet, dignissimos, tenetur vitae dolor quam iusto assumenda hic reprehenderit!</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 highlight">
                            <div class="h-caption"><h4>Project</h4></div>
                            <div class="h-body text-center">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, commodi, sequi quis ad fugit omnis cumque a libero error nesciunt molestiae repellat quos perferendis numquam quibusdam rerum repellendus laboriosam reprehenderit! </p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 highlight">
                            <div class="h-caption"><h4>Legacy</h4></div>
                            <div class="h-body text-center">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, vitae, perferendis, perspiciatis nobis voluptate quod illum soluta minima ipsam ratione quia numquam eveniet eum reprehenderit dolorem dicta nesciunt corporis!</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 highlight">
                            <div class="h-caption"><h4>Revenue</h4></div>
                            <div class="h-body text-center">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, excepturi, maiores, dolorem quasi reprehenderit illo accusamus nulla minima repudiandae quas ducimus reiciendis odio sequi atque temporibus facere corporis eos expedita!</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    */
    )
}

export default About;

