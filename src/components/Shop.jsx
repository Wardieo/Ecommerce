import React, { useState } from 'react'
import Sidebar from './Sidebar'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import List from './List'
import Cart from './Cart';

const Shop = () => {
  const [catname, setCatname] = useState('')
  const [search, setSearch] = useState('')
  const [rating, setRating] = useState(1)
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [nav, setNav] = useState(false);
  const [cart, setCart] = useState([])


  const handleCategory = (e) => {
    setCatname(e.target.innerText)
  }

  const addCart = (cart) => {
    setCart(prevCart => {
      if(prevCart.find(item => item.id === cart.id)){
        return prevCart;
      }else{
        return [...prevCart, cart]
      }
    })
  }
  return (
    <div className='h-[100%] flex item w-full'>
      <Sidebar handle={handleCategory} categ={catname} setRating={setRating} rating={rating} setMin={setMin} setMax={setMax}/>
      <div className='w-full relative'>
        <div className='border-b-2  mt-3 px-6 pb-6'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-2 items-center bg-gray-100 px-3 py-2 '>
                <SearchIcon className='text-gray-400'/>
                <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Search' className='bg-gray-100 focus:outline-none rounded-md'/>
              </div>
              <div className='relative flex items-center gap-2 hover:cursor-pointer mr-7 bg-gray-700 text-white px-4 text-sm py-2 rounded-full' onClick={() => setNav(!nav)}>
                <ShoppingCartOutlinedIcon />
                {cart.length > 0 ? <div className='absolute top-[-1px] right-[-1px] bg-red-500 w-2 h-2 rounded-full'>
                  </div> : null}
              </div>
            </div>    
        </div>
        <div className='mx-6 mt-5'>
          <List category={catname} setCat={setCatname} search={search} rating={rating} min={min} max={max} addCart={addCart}/>
        </div>
      </div>
      {
        nav ? <div className='fixed right-0 translate-x-0 duration-100 bg-white w-[30%] h-full p-6 border-l-2 shadow-lg'>
        <Cart setNav={setNav} nav={nav} cart={cart} setCart={setCart}/>
        </div>
        :
        <div className='fixed translate-x-[100%] duration-100 right-0 bg-white w-[30%] h-[100%] p-6 border-l-2 shadow-lg'>
        <Cart setNav={setNav} nav={nav}/>
        </div>
      }
      
      
    </div>
    
  )
}

export default Shop