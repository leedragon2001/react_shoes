import React, { Component } from "react";

export default class Modal extends Component {
  renderListCart() {
    const { listCart, handleQuantity } = this.props;
    return listCart.map((shoes) => {
      return (
        <tr key={shoes.id}>
          <td>{shoes.id}</td>
          <td>{shoes.name}</td>
          <td>
            <img src={shoes.image} width={50} alt="" />
          </td>
          <td>
            <button onClick={() => handleQuantity(shoes.id, -1)}>-</button>
            {shoes.quantity}
            <button onClick={() => handleQuantity(shoes.id, 1)}>+</button>
          </td>
          <td>{shoes.price}</td>
          <td>{shoes.price * shoes.quantity} </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => handleQuantity(shoes.id, shoes.quantity)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>{this.renderListCart()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
