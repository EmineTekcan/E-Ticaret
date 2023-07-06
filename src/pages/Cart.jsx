import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartTotal } from '../redux/features/cartSlice';
import CustomCart from '../components/cart/CustomCart';

const Cart = () => {

    const dispatch = useDispatch();
    const { carts, itemCount, totalAmount } = useSelector(state => state.carts)
    const navigate = useNavigate();

    console.log(itemCount)
    console.log(totalAmount)

    useEffect(() => {
        const total = dispatch(getCartTotal())
        console.log(total)
    }, [dispatch])


    return (
        <div>
            {
                carts.length > 0 ?
                    <div>
                        {
                            carts.map((item, index) => {
                                return <CustomCart key={index} item={item} />
                            })
                        }
                        <div className='flex justify-end text-xl items-center'>TOPLAM TUTAR: <span className='font-bold text-2xl mx-2'> {totalAmount} TL</span></div>
                    </div> :
                    <div>
                        Kartınız Boş ...
                    </div>
            }
        </div>
    )
}

export default Cart