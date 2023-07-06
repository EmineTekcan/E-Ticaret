import React, { useState } from 'react'

const DetailProd = ({ productDetail }) => {


  console.log(productDetail)

  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0)
      setQuantity(quantity - 1)
  }

  const increment = () => {
    if (quantity < productDetail?.rating?.count)
      setQuantity(quantity + 1)
  }

  return (
    <div className='flex gap-10 mt-7'>
      <img className='w-[600px] h-[600px]' src={productDetail?.image} alt="product image" />
      <div className=''>
        <div className='text-2xl font-bold'>
          {productDetail?.title}
        </div>
        <div className='my-2 text-2xl'>
          {productDetail?.description}
        </div>
        <div className='my-2 text-lg text-red-500'>Rating: {productDetail?.rating?.rate}</div>
        <div className='my-2 text-lg text-red-500'>Count: {productDetail?.rating?.count}</div>
        <div className='text-3xl font-bold'>{productDetail?.price} TL</div>
        <div className='flex items-center gap-5 my-5'>
          <div onClick={decrement} className='text-5xl cursor-pointer'>-</div>
          <input className='outline-none w-12 text-center text-4xl font-bold' type="text" value={quantity} />
          <div onClick={increment} className='text-4xl cursor-pointer'>+</div>
        </div>
        <div className='border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer my-4 hover:bg-gray-400 h-16 flex items-center justify-center'>Sepete Ekle</div>
      </div>
    </div>
  )
}

export default DetailProd