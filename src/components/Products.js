import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Products extends Component {
    state={
        products:[], 
        errorMessage:""
    }

    async componentDidMount(){
        try{
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        this.setState({products})
        }
        catch(err){
            //handle the error
            this.setState({errorMessage:err})
        }
    }
    render() {
        return (
            <div class="small-container">
            <div class="row row-2">
                <h2>All Products</h2>
                <select>
                    <option>Default Sort</option>
                    <option>Sort By Price</option>
                    <option>Sort By Popularity</option>
                    <option>Sort By Rating</option>
                    <option>Sort By Sale</option>
                </select>
            </div>
            <div class="row">
                {this.state.products.map(product=>
                      <div class="col-4" key={product.id}>
                      <Link to={`/productdetail/${product.id}`}><img src={product.image}/></Link>
                      <h4>{product.title}</h4>
                     
                      <p>${product.price}</p>
                  </div>
                )}
              
            
            </div>
           
            
        </div>
        )
    }
}
