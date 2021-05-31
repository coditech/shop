import React, { Component } from "react";

export default class ProductDetail extends Component {
  state = {
    product: {},
  };
  async componentDidMount() {
    const response = await fetch(
      `https://fakestoreapi.com/products/${this.props.match.params.id}`
    );
    const result = await response.json();
    this.setState({ product: result });
  }
  render() {
    return (
      <div class="small-container single-product">
        <div class="row">
          <div class="col-2">
            <img src={this.state.product.image} width="100%" id="ProductImg" />
          </div>
          <div class="col-2">
            <p>{this.state.product.category}</p>
            <h1>{this.state.product.title}</h1>
            <h4>${this.state.product.price}</h4>
            <select>
              <option>Select Size</option>
              <option>XXL</option>
              <option>XL</option>
              <option>L</option>
              <option>M</option>
              <option>S</option>
            </select>
            <input type="number" value="1" />
            <a href="" class="btn">
              Add To Cart
            </a>

            <h3>
              Product Details <i class="fa fa-indent"></i>
            </h3>
            <br />
            <p>
            {this.state.product.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
