import React, { Component } from "react";

export default class DetailShoes extends Component {
  render() {
    const { detailShoes } = this.props;
    return (
      <div
        className="modal fade"
        id="myModal"
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
              <div className="container">
                <div className="row">
                  <div className="col-sm-5">
                    <img className="img-fluid" src={detailShoes.image} alt="" />
                  </div>
                  <div className="col-sm-7">
                    <h3>Thông số kỹ thuật</h3>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Tên</td>
                          <td>{detailShoes.name}</td>
                        </tr>
                        <tr>
                          <td>Hình ảnh</td>
                          <td>{detailShoes.image}</td>
                        </tr>
                        <tr>
                          <td>Mô tả</td>
                          <td>{detailShoes.description}</td>
                        </tr>
                        <tr>
                          <td>Giá</td>
                          <td>{detailShoes.price}</td>
                        </tr>
                        <tr>
                          <td>Số Lượng</td>
                          <td>{detailShoes.quantity}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
