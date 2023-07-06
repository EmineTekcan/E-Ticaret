import React from 'react'

const Sorting = ({ setSort }) => {
  return (
    <div
      className='bg-gray-100 my-3 p-3 flex items-center justify-end'
    >
      <select
        onChange={(e) => setSort(e.target.value)}
        className='bg-white outline-none py-3 px-5'
        name="" id="">
        <option disabled value="">SEÇİNİZ</option>
        <option value="asc">ARTAN</option>
        <option value="desc">AZALAN</option>
      </select>
    </div>
  )
}

export default Sorting