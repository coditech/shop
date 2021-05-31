import React from 'react';
import LandingSection from "../components/LandingSection";
import FeaturedCategories from "../components/FeaturedCategories";
import LatestProducts from "../components/LatestProducts";

export default function HomePage(props) {
    return (
        <>
           <LandingSection {...props}/>

<FeaturedCategories {...props}/>

<LatestProducts {...props}/> 
        </>
    )
}
