import React from "react";
import './All.css'

const SectionHero=()=>{

    return(
        <div className="section-hero" id="#hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <a href="#cta" className="btn btn--full margin-right-sm"
              >Start eating well</a
              >
              <a href="#how" className="btn btn--outline">Learn more &darr;</a>
              <div className="delivered-meals">
              <div className="delivered-imgs">
                {[1,2,3,4,5,6].map((ele,ind)=>(
                    <img
                    key={ind}
                    src={`./img/customers/customer-${ele}.jpg`}
                    alt="Customer"
                    />
                ))}
                </div>
              <p className="delivered-text">
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <img
            src="./img/hero.png"
            className="hero-img"
            alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </div>
        </div>
      </div>
    )
}

export default SectionHero;