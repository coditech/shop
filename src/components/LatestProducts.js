import React from 'react'

export default class LatestProducts extends React.Component {
    state={
        products:[]
    }
    async componentDidMount(){
        const response = await fetch('https://fakestoreapi.com/products?sort=desc&limit=8');
        const products = await response.json();
        this.setState({products})
    
    }
    render(){
    return (
        <div class="small-container">
         <h2 class="title">Latest Products</h2>
        <div class="row">
            {this.state.products.map(product=>
                 <div class="col-3" key={product.id}>
                 <img src={product.image}/>
                 <h4>{product.title}</h4>
               
                 <p>${product.price}</p>
             </div>
                )}
           
           </div>
           </div>

    )
    }
}
