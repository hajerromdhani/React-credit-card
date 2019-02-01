import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./styles.css";

const normalizeCardNumber = cardnumber =>
  cardnumber.replace(/\D/g, "").slice(0, 16);

const formulCardNumberForinput = cardnumber => {
  if (cardnumber === "") return "";
  return cardnumber.match(/.{1,4}/g).join(" ");
};

const normalizeValidThru = validThru => {
  let monthAndYear = validThru
    .replace(/\D/g, "")
    .slice(0, 4)
    .match(/.{1,2}/g);
  if (!monthAndYear) {
    return "";
  }
  if (monthAndYear.length === 1) {
    let monthAsNumber = Number(monthAndYear[0]);
    if (monthAsNumber > 12) monthAndYear[0] = "12";
    if (monthAsNumber === 0 && monthAndYear[0].length === 2) {
      monthAndYear[0] = "0";
    }
  }
  if (monthAndYear.length === 2) {
    let yearAsNumber = Number(monthAndYear[1]);
    if (yearAsNumber > 50) monthAndYear[1] = "50";
    if (yearAsNumber === 0) monthAndYear[1] = "0";
  }
  return monthAndYear.join("/");
};

class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cardnumber: "",
      date: ""
    };
  }
  ChangeName = event => {
    this.setState({
      name: event.target.value
        .trimLeft()
        .replace(/\d/g, "")
        .toUpperCase()
        .slice(0, 15)
    });
  };

  ChangecardNumber = event => {
    this.setState({
      cardnumber: normalizeCardNumber(event.target.value)
    });
  };
  changeMonthYear = event =>
    this.setState({
      date: normalizeValidThru(event.target.value)
    });
  render() {
    return (
      <div className="div-creditcard">
        <Card
          creditcardinfo={[
            this.state.cardnumber,
            this.state.name,
            this.state.date
          ]}
        />
        <div className="div-input">
          <input
            value={formulCardNumberForinput(this.state.cardnumber)}
            onChange={this.ChangecardNumber}
            placeholder="Card Number"
          />
          <input
            value={this.state.date}
            onChange={this.changeMonthYear}
            placeholder="Valid thru"
          />
          <input
            value={this.state.name}
            onChange={this.ChangeName}
            placeholder="Card holder"
          />
        </div>
      </div>
    );
  }
}

export default CreditCard;
