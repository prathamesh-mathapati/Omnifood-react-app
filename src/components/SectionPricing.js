import React from "react";

import './All.css'

const SectionPricing=()=>{

    return (
        <section className="section-pricing" id="pricing">
        <div className="container">
        <div className="contaire center-text">
          <span className="subheading">Princing</span>
          <h2 className="heading-secondary">
            Eating well without breaking the bank
          </h2>
        </div>
      </div>
      
      <div className="container grid grid--2--cols margin-bottom-md section-pricing-md">
        <div className="princing-plan princing-plan--starter">
          <header className="plan-header">
            <p className="plan-name">Starter</p>
            <p className="plan-price"><span>$</span>399</p>
            <p className="plan-text">per month. That's just $13 per meal!</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
              <span>1 meal per day</span>
            </li>
            <li className="list-item">
              <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
              <span>Order from 11am to 9pm</span>
            </li>
            <li className="list-item">
              <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <ion-icon className="list-icon" name="close-outline"></ion-icon>
            </li>
          </ul>
          <div className="plan-sing-up">
            <a href="#hero" className="btn btn--full">Start eating well</a>
          </div>
        </div>
        
        <div className="princing-plan princing-plan--complete">
          <header className="plan-header">
            <p className="plan-name">Complete</p>
            <p className="plan-price"><span>$</span>649</p>
            <p className="plan-text">per month. That's just $11 per meal!</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
              <span><strong>2 meals</strong> per day</span>
            </li>
            <li className="list-item">
              <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
              <span>Order <strong>24/7</strong></span>
            </li>
            <li className="list-item">
              <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className="plan-sing-up">
            <a href="#cta" className="btn btn--full">Start eating well</a>
          </div>
        </div>
      </div>
      
      <div className="container grid">
        <aside className="plan-details">
          Prices include all applicable taxes. Users can cancel at any time.
          Both plans includethe following:
        </aside>
      </div>
      
      <div className="container grid grid--4-cols">
        <div className="fuature">
          <ion-icon className="fuature-icon" name="infinite-outline"></ion-icon>
          
          <p className="fuature-title">Never cook again!</p>
          <p className="fuature-text">
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div className="fuature">
          <ion-icon className="fuature-icon" name="nutrition-outline"></ion-icon>
          
          <p className="fuature-title">Local and organic</p>
          <p className="fuature-text">
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>
        <div className="fuature">
          <ion-icon className="fuature-icon" name="leaf-outline"></ion-icon>
          <p className="fuature-title">No waste</p>
          <p className="fuature-text">
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>
        <div className="fuature">
          <ion-icon className="fuature-icon" name="pause-outline"></ion-icon>
          
          <p className="fuature-title">Pause anytime</p>
          <p className="fuature-text">
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </section>
    

    )
}

export default SectionPricing;
