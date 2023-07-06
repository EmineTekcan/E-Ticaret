import React, { useEffect, useState } from 'react'
import CustomSlider from '../components/home/CustomSlider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sorting from '../components/home/Sorting';
import Category from '../components/home/Category';
import Products from '../components/home/Products';

const Home = () => {

    const [sort, setSort] = useState("")
    const [category, setCategory] = useState("")

    return (
        <div>
            <CustomSlider />
            <Sorting setSort={setSort} />
            <div className='flex'>
                <Category setCategory={setCategory} />
                <Products category={category} sort={sort} />
            </div>
        </div>
    )
}

export default Home