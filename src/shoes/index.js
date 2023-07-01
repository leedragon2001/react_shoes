import React, { Component } from "react";
import ListShoes from "./listShoes";
import Modal from "./modal";
import DetailShoes from "./detailShoes";
import data from "./data.json";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listShoes: data,
      detailShoes: data[0],
      listCart: [],
    };
  }
  getDetailShoes = (shoes) => {
    this.setState({ detailShoes: shoes });
  };

  findIndex = (id) => this.state.listCart.findIndex((shoes) => shoes.id === id);

  addCart = (shoes) => {
    const index = this.findIndex(shoes.id);
    let listCart = [...this.state.listCart];
    if (index !== -1) {
      listCart[index].quantity += 1;
    } else {
      const shoesAddCart = {
        id: shoes.id,
        name: shoes.name,
        image: shoes.image,
        quantity: 1,
        price: shoes.price,
      };
      listCart.push(shoesAddCart);
    }
    this.setState({ listCart });
  };

  handleQuantity = (id, quantity) => {
    const newListCart = this.state.listCart
      .map((shoes) => {
        if (shoes.id === id) {
          console.log(shoes);
          return {
            ...shoes,
            quantity: quantity + shoes.quantity,
          };
        }

        return shoes;
      })
      .filter((shoes) => shoes.quantity);

    this.setState({
      listCart: newListCart,
    });
  };

  totalQuantity = () => {
    return this.state.listCart.reduce(
      (total, shoes) => (total += shoes.quantity),
      0
    );
  };

  render() {
    const { detailShoes, listCart } = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.totalQuantity()})
          </button>
        </div>
        <ListShoes
          listShoes={this.state.listShoes}
          getDetails={this.getDetailShoes}
          addCart={this.addCart}
        />
        <Modal listCart={listCart} handleQuantity={this.handleQuantity} />
        <DetailShoes detailShoes={detailShoes} />
      </div>
    );
  }
}
