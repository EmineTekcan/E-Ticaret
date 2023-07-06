import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../redux/features/productSlice';
import DetailProd from '../components/detail/DetailProd';
import Loading from '../components/Loading';
import { STATUS } from '../utils/status';

const ProductDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { productDetail, productDetailStatus } = useSelector(state => state.products)


    useEffect(() => {
        dispatch(getProductDetail(id))
    }, [id])

    return (
        <div>
            {
                productDetailStatus == STATUS.LOADING ? <Loading /> : <DetailProd productDetail={productDetail} />
            }

        </div>
    )
}

export default ProductDetail