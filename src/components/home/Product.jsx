import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({ data }) => {
    const navigate=useNavigate();

    return (
        <div
        onClick={()=>navigate(`products/${data.id}`)}
        className='w-[350px] p-2 mb-2 mx-2 border rounded-md relative cursor-pointer'>
            <div className='text-2xl font-bold rounded-md absolute right-0 top-0 bg-black text-white p-2 m-1'>{data.price}<span className='text-sm font-semibold'> TL</span></div>
            <img className='w-[200px] h-[200px] m-auto' src={data?.image} alt="product image" />
            <div className='text-center px-3 mt-3 text-xl font-bold'>{data.title}</div>
        </div>
    )
}

export default Product