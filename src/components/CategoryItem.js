import React from 'react'

export default function CategoryItem(props) {
    return (
        <div class="col-3">
                    <img src="images/category-1.jpg"/>
                    <h4>{props.category}</h4>
                </div>
    )
}
