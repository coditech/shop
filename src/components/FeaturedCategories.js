import React from 'react'
import CategoryItem from './CategoryItem';

export default class FeaturedCategories extends React.Component{
    state={
        categories:[]
    }

    async componentDidMount(){
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const categories = await response.json();
        this.setState({categories});
    }
    render(){
    return (
        <div class="categories">
        <div class="small-container">
            <div class="row">
                {
                    this.state.categories.map(category=>
                        <CategoryItem category={category} key={category}/>
                        )
                }
                
               
            </div>
        </div>
    </div>
    )
    }
}
