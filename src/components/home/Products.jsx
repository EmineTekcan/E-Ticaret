import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/features/productSlice';
import { STATUS } from '../../utils/status';
import Loading from '../Loading';
import Product from './Product';

const Products = () => {

  const dispatch = useDispatch();
  const { products, productStatus } = useSelector(state => state.products)

  console.log(products)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])


  return (
    <div className='m-auto'>
      {
        productStatus == STATUS.LOADING ?
          <Loading /> :

          <div  className='flex flex-wrap'>
           { products.map((item, index) => <Product key={index} data={item} />)}
          </div>
      }
    </div>
  )
}

export default Products