import React from "react";
import './All.css'

const SectionFatured=()=>{

    return(
        <div className="section-fatured">
        <div className="container">
          <h2 className="hading-featured-in">As featured in</h2>
          <div className="logos">
            <img src="./img/logos/techcrunch.png" alt="techcrunch" />
            <img
              src="./img/logos/business-insider.png"
              alt="business insider logo"
            />
            <img
            src="contant/img/logos/the-new-york-times.png"
            alt="The new york time logo"
            />
            <img src="./img/logos/forbes.png" alt="forbes logo" />
            <img src="./img/logos/usa-today.png" alt="usa today logo" />
          </div>
        </div>
      </div>

    )
}

export default SectionFatured;