import React from 'react'
import NavbarLeft from './navbarItem/NavbarLeft'
import NavbarRight from './navbarItem/NavbarRight'

const Navbar = () => {
    return (
        <div className='flex flex-row items-center justify-between my-5 bg-fixed'>
            <NavbarLeft />
            <NavbarRight />
        </div>
    )
}

export default Navbar