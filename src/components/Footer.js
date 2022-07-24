import React from "react";

import './All.css'


const Footer=()=>{
    return(

        <div className="footer">
        <div className="container grid grid--footer">
          <div className="logo-col">
              <img
                className="logo"
                alt="Omnifood logo"
                src="./img/omnifood-logo.png"
                />
                
                <ul className="social-links">
                  <li>
                    <a className="footer-link" href="#hero"
                  ><ion-icon
                    className="social-icon"
                    name="logo-instagram"
                    ></ion-icon
                    ></a>
                  </li>
              <li>
                <a className="footer-link" href="#hero"
                ><ion-icon className="social-icon" name="logo-facebook"></ion-icon
                  ></a>
                </li>
                <li>
                <a className="footer-link" href="#hero"
                ><ion-icon className="social-icon" name="logo-twitter"></ion-icon
                ></a>
              </li>
            </ul>

            <p className="copyright">
              Copyright &copy; <span className="year">2027</span> by Omnifood, Inc. All rights reserved.
            </p>
          </div>
          <div className="address-col">
            <p className="footer-heading">Contact us</p>
            <address className="contacts">
              <p className="address">
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </p>
              <p>
                <a className="footer-link" href="tel:415-201-6370">415-201-6370</a
                  ><br />
                  <a className="footer-link" href="mailto:hello@omnifood.com"
                  >hello@omnifood.com</a
                  >
                </p>
              </address>
          </div>
          <nav className="nav-col">
            <p className="footer-heading">Account</p>
            <ul className="footer-nav">

                {['Create account','Sing in','ios app','Android app'].map(item=>(
                    <li key={item}><a className="footer-link" href="#hero">{item}</a></li>

                ))}
            </ul>
          </nav>
          
          <nav className="nav-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-nav">
                {['About Omnifood','For Business','Cooking Partners','Carees'].map(item=>(
                                  <li  key={item}><a className="footer-link" href="#hero">{item}</a></li>

                ))}
            </ul>
          </nav>
          
          <nav className="nav-col">
            <p className="footer-heading">Resources</p>
            <ul className="footer-nav">

                {['Recipe directory','elp center', 'Privacy & terms'].map(item=>(
                                  <li  key={item}><a className="footer-link" href="#hero">{item} </a></li>

                ))}
                </ul>
          </nav>
        </div>
      </div>

    )
}

export default Footer;