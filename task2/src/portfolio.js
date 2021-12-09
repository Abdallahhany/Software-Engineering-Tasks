import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/fontawesome.css';

const Portfolio = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="left">
                    <img src="./images/Rashed.png" alt="Rashed" width="350px" />
                        <div className="firstSec">
                            <p><i className="icon-briefcase"></i>Developer</p>
                            <p><i className="icon-home"></i>Menofia, EG</p>
                            <p><i className="icon-envelope" aria-hidden="true"></i>abdallahhany253@gmail.com</p>
                            <p><i className="icon-phone" aria-hidden="true"></i> 01272149656</p>
                            <hr/>
                        </div>
                        <div className="firstSec">
                            <p className="skillsTitle"><b><i className="icon-asterisk"></i>Skills</b></p>
                            <p>Node js - Express</p>
                            <div className="container">
                                <div className="skills nodejs">90%</div>
                            </div>
                            <p>Flutter</p>
                            <div className="container">
                                <div className="skills flutter">80%</div>
                            </div>
                            <p>React</p>
                            <div className="container">
                                <div className="skills react">65%</div>
                            </div>
                        </div>
                        <div className="firstSec">
                            <p className="skillsTitle"><b><i className="icon-globe"></i>Languages</b></p>
                            <p>Arabic</p>
                            <div className="container">
                                <div className="skills nodejs"></div>
                            </div>
                            <p>English</p>
                            <div className="container">
                                <div className="skills flutter"></div>
                            </div>
                            <p>French</p>
                            <div className="container">
                                <div className="skills react"></div>
                            </div>
                            <br/>
                        </div>
                </div>
                <div className="freeSpace"></div>
                <div className="right">
                    <div>
                        <div className="work">
                            <h1><i className="icon-suitcase "></i>
                                Work Experience</h1>
                            <div className="workContainer">
                                <b>Freelancer Web Developer</b>
                                <br/>
                                    <i className="icon-calendar fa-fw w3-margin-right"></i>Jan 2020 - <span
                                    className="w3-tag w3-teal w3-round">Current</span>
                                    <p>Use MERN Stack To build Web Applications</p>
                                    <hr/>
                            </div>
                            <div className="workContainer">
                                <b>Freelancer Flutter Developer</b>
                                <br/>
                                    <i className="icon-calendar fa-fw w3-margin-right"></i>Jan 2020 - <span
                                    className="w3-tag w3-teal w3-round">Current</span>
                                    <p>Can Build Mobile Apps in both IOS and Android using Flutter </p>
                            </div>
                        </div>
                        <div className="freeSpace"></div>
                        <div className="work">
                            <h1><i className="icon-certificate "></i>
                                Education</h1>
                            <div className="workContainer">
                                <b>Faculty Of Computers and Information</b>
                                <br/>
                                    <i className="icon-calendar fa-fw w3-margin-right"></i>Jan 2019 - <span
                                    className="w3-tag w3-teal w3-round">Jan 2023</span>
                                    <p>Computer Science Student </p>
                                    <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>Find me on social media.</p>
                <Link to="https://www.facebook.com/AbdallahHanyRashed" ><i className="icon-facebook"></i></Link>
                <Link to="https://www.instagram.com/abdallah_hany2"><i className="icon-instagram"></i></Link>
                <Link to="https://twitter.com/Abdalla96418267"><i className="icon-twitter"></i></Link>
                <Link to="https://www.linkedin.com/in/abdallah-hany-419944209"><i className="icon-linkedin"></i></Link>
                <Link to="https://github.com/Abdallahhany"><i className="icon-github"></i></Link>
            </footer>
        </Fragment>
    );
};

export default Portfolio;
