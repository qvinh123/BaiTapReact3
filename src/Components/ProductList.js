import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <ProductItem xemChiTiet={this.props.xemChiTiet} products={this.props.products} />
        </div>
      </div>
    );
  }
}
