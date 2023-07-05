import React from 'react'

const Sorting = () => {
  return (
    <div
    className='bg-gray-100 my-3 p-3 flex items-center justify-end'
    >
      <select
      className='bg-white outline-none py-3 px-5'
      name="" id="">
        <option disabled value="">SEÇİNİZ</option>
        <option value="inc">ARTAN</option>
        <option value="dec">AZALAN</option>
      </select>
    </div>
  )
}

export default Sorting