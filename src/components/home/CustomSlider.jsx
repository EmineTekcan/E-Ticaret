import React from 'react'
import Slider from "react-slick";

const CustomSlider = () => {

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div>
      <Slider {...settings}>
        <div className='!flex items-center bg-gray-100 pl-4 '>
          <div >
            <div className='text-4xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
            <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus, laboriosam molestiae dignissimos nam numquam repellendus. Hic tempora, ad error in ex totam sapiente ipsam earum pariatur repellendus. Aut, architecto?</div>
            <div className='border rounded-full cursor-pointer text-2xl p-2 w-[200px] flex items-center justify-center bg-gray-200'>İncele</div>
          </div>
          <img
            width={500}
            src='https://cdn.pixabay.com/photo/2014/11/14/19/57/sneakers-531172_1280.jpg' alt='shoe image' />
        </div>
        <div className='!flex items-center bg-gray-100 pl-4 '>
          <div >
            <div className='text-4xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
            <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus, laboriosam molestiae dignissimos nam numquam repellendus. Hic tempora, ad error in ex totam sapiente ipsam earum pariatur repellendus. Aut, architecto?</div>
            <div className='border rounded-full cursor-pointer text-2xl p-2 w-[200px] flex items-center justify-center bg-gray-200'>İncele</div>
          </div>
          <img
            width={500}
            src='https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg' alt='shoe image' />
        </div>
        <div className='!flex items-center bg-gray-100 pl-4 '>
          <div >
            <div className='text-4xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
            <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus, laboriosam molestiae dignissimos nam numquam repellendus. Hic tempora, ad error in ex totam sapiente ipsam earum pariatur repellendus. Aut, architecto?</div>
            <div className='border rounded-full cursor-pointer text-2xl p-2 w-[200px] flex items-center justify-center bg-gray-200'>İncele</div>
          </div>
          <img
            width={500}
            src='https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg' alt='shoe image' />
        </div>
      </Slider>
    </div>
  )
}

export default CustomSlider