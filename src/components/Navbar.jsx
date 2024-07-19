import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <div className='w-full flex items-center my-4 justify-between'>
        <div className='text-xl font-extrabold'>
            <h1>NOSTRA</h1>
        </div>
        <div className='flex gap-8'>
            <p>Shop</p>
            <p>Most wanted</p>
            <p>New arival</p>
            <p>Brands</p>
        </div>
        <div className='flex gap-4 items-center'>
            <div className='bg-gray-50 py-2 pl-3 flex items-center'>
                <SearchOutlinedIcon className='text-gray-500'/>
                <input type="text" className='bg-gray-50 py-2 px-3 focus:outline-none' placeholder='Search'/>
            </div>
            <ShoppingCartOutlinedIcon />
            <PersonOutlineOutlinedIcon />
        </div>
    </div>
  )
}

export default Navbar