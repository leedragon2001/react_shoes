import React, { Component } from "react";
import Shoes from "./shoes";

export default class ListShoes extends Component {
  renderListShoes = () => {
    const { listShoes, getDetails, addCart } = this.props;
    return listShoes.map((shoes) => {
      return (
        <Shoes
          key={shoes.id}
          shoes={shoes}
          getDetails={getDetails}
          addCart={addCart}
        />
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListShoes()}</div>
      </div>
    );
  }
}
