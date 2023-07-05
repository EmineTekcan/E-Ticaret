import React from 'react'
import CustomSlider from '../components/home/CustomSlider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sorting from '../components/home/Sorting';
import Category from '../components/home/Category';
import Products from '../components/home/Products';

const Home = () => {
    return (
        <div>
            <CustomSlider />
            <Sorting />
            <div className='flex'>
                <Category />
                <Products />
            </div>
        </div>
    )
}

export default Home