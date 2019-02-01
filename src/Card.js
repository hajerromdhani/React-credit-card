import React from "react";

const formulCardNumberForcard = cardnumber =>
  cardnumber.concat("*".repeat(16 - cardnumber.length));

const Card = props => {
  return (
    <div className="div-card">
      <div className="title">
        <p>CREDIT CARD </p>
      </div>
      <div className="div-image1" />
      <div className="div-element">
        <div className="div-form">
          <div className="div-number">
            <span className="span-number">
              {formulCardNumberForcard(props.creditcardinfo[0])}
            </span>
          </div>
          <div className="div-date">
            <div>
              <span className="div-valid"> 5422</span>
            </div>
            <span className="div-valid">
              VALID <br />
              THRU
            </span>
            <div>
              <span className="div-valid">
                MONTH/YEAR
                <br />
                <h2>{props.creditcardinfo[1]} </h2>
              </span>
            </div>
          </div>
        </div>
        <div className="div-image2" />
      </div>
      <div className="div-holder">
        <span>{props.creditcardinfo[2]} </span>
      </div>
    </div>
  );
};

export default Card;
