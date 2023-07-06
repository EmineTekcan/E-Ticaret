import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/features/cartSlice';

const CustomCart = ({ item }) => {

  const dispatch = useDispatch();

  return (
    <div className='my-5 mx-5 flex gap-8 '>
      <img className='w-[150px] h-[150px]' src={item.image} alt="item image" />
      <div>
        <div className='font-bold text-lg'>{item?.title}</div>
        <div>{item?.description}</div>
        <div className='font-bold text-xl'>{item?.price} TL</div>
        <div>Quantity: <span className='font-bold text-xl'>{item?.quantity}</span></div>

      </div>
      <div className='absolute right-44'>
        <div onClick={() => dispatch(removeFromCart(item?.id))} className='bg-red-500 text-white w-[100px] h-14 flex items-center justify-center cursor-pointer'>Ürünü Sil</div>
      </div>
    </div>
  )
}

export default CustomCart