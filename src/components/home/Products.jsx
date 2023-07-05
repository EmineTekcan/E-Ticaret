import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/features/productSlice';
import { STATUS } from '../../utils/status';
import Loading from '../Loading';
import Product from './Product';
import ReactPaginate from 'react-paginate';

const Products = () => {

  const dispatch = useDispatch();
  const { products, productStatus } = useSelector(state => state.products)

  console.log(products)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className='m-auto'>
      {
        productStatus == STATUS.LOADING ?
          <Loading /> :

          <>
            <div className='flex flex-wrap'>
              {currentItems.map((item, index) => <Product key={index} data={item} />)}
            </div>
            <ReactPaginate
              className="paginate"
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            />
          </>
      }
    </div>
  )
}

export default Products