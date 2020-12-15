import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    return this.props.products.map((sp, index) => {
      return (
        <div  key={index}  className="col-3">
          <div className="card">
            <img className="card-img-top" src={sp.img} alt="s" />
            <div className="card-body">
              <h4 className="card-title">{sp.name}</h4>
              <p className="card-text">{sp.price}</p>
              <button onClick={()=>{this.props.xemChiTiet(sp)}} data-toggle="modal" data-target="#modelId" className="btn btn-success">Xem chi tiết</button>
            </div>
          </div>
        </div>
      );
    });
  }
}