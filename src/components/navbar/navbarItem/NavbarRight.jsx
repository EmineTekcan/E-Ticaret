import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import { SlBasket } from 'react-icons/sl'

const NavbarRight = () => {
    return (
        <div className='flex items-center gap-8'>
            <div className='flex items-center border p-3 rounded-full bg-gray-200'>
                <input
                    type='text'
                    placeholder='Arama yapınız'
                    className='outline-none bg-gray-200'
                />
                <BiSearch className='cursor-pointer' size={28} />
            </div>
            <AiOutlineHeart className='cursor-pointer' size={28} />
            <div className='relative'>
                <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>4</div>
                <SlBasket className='cursor-pointer' size={28} />
            </div>
        </div>
    )
}

export default NavbarRight