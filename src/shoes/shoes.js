import React, { Component } from "react";

export default class Shoes extends Component {
  render() {
    const { shoes, getDetails, addCart } = this.props;
    return (
      <div className="col-sm-3">
        <div className="card">
          <img className="card-img-top" src={shoes.image} alt="" />
          <div className="card-body">
            <h4 className="card-title">{shoes.name}</h4>
            <button
              className="btn btn-success"
              data-toggle="modal"
              data-target="#myModal"
              onClick={() => {
                getDetails(shoes);
              }}
            >
              Chi tiết
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                addCart(shoes);
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
