import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/features/categorySlice';

const Category = ({setCategory}) => {

  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories)

  console.log(categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <div className='w-1/6 bg-gray-100 p-4 max-h-screen'>
      <div className='border-b pb-2 text-xl font-bold px-2'>
        KATEGORİ
      </div >
      {categories?.map((item, index) => {
        return (
          <div
          onClick={()=>setCategory(item)}
            className='text-lg cursor-pointer hover:bg-gray-200 p-2'
            key={index}>
            {item}
          </div>
        )
      })}
    </div>
  )
}

export default Category