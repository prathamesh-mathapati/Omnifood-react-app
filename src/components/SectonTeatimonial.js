import React from "react";
import './All.css'

const SectonTeatimonial=()=>{
    return(
        <div className="section-testimonial" id="testimonial">
        <div className="testimonials-container">
          <span className="subheading">Testionial</span>
          <h2 className="heading-secondary">Once you try it, you can't go back</h2>

          <div className="testimonials">
            <figure className="testimonial-text">
              <img
              src="./img/customers/dave.jpg"
              className="testimonials-img"
              alt="Phone of customer "
              />
              <blockquote className="testimonial-text">
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.
              </blockquote>
              <p className="testimonial-name">&mdash;(Dave Bryson)</p>
            </figure>
            
            <figure className="testimonial-text">
              <img
              src="./img/customers/ben.jpg"
              className="testimonials-img"
              alt="Phone of customer "
              />
              <blockquote className="testimonial-text">
                The AI algorithm is crazy good, it chooses the right meals for
                me every time. It's amazing not to worry about food anymore!
              </blockquote>
              <p className="testimonial-name">&mdash; (Ben Hadley)</p>
            </figure>

            <figure className="testimonial-text">
              <img
              src="./img/customers/steve.jpg"
              className="testimonials-img"
              alt="Phone of customer "
              />
              <blockquote className="testimonial-text">
                Omnifood is a life saver! I just started a company, so there's
                no time for cooking. I couldn't live without my daily meals now!
              </blockquote>
              <p className="testimonial-name">&mdash; (Steve Miller)</p>
            </figure>

            <figure className="testimonial-text">
              <img
              src="./img/customers/hannah.jpg"
              className="testimonials-img"
              alt="Phone of customer "
              />
              <blockquote>
                I got Omnifood for the whole family, and it frees up so much
                time! Plus, everything is organic and vegan and without plastic.
              </blockquote>
              <p className="testimonial-name">&mdash; (Hannah Smith)</p>
            </figure>
          </div>
        </div>
        
        <div className="gallery">
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(item=>(
                <figure className="gallery-item" key={item}>
                <img
                  src={`./img/gallery/gallery-${item}.jpg`}
                  alt=" beautifully"
                />
              </figure>
            ))}
          </div>
        </div>

    )
}

export default SectonTeatimonial;