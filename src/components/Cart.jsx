import React, { useEffect, useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = ({ setNav, nav, cart, setCart }) => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const totalPrice = cart ? cart.reduce((acc, each) => acc + each.price, 0) : null;
        setTotal(totalPrice)
    }, [cart])
    
    const removeCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id))
    }

  return (
    <div className='pr-6 h-full relative'>
        <div className='flex justify-between items-center'>
            <h1 className='font-bold text-3xl'>My Cart</h1>
            <div className='flex gap-2 hover:cursor-pointer' onClick={() => setNav(!nav)}>
                <KeyboardBackspaceIcon />
                <p className=''>Back</p>
            </div>
        </div>
        <div className='mt-5  h-[75%] overflow-scroll'>
            {cart ? cart.map((each) => {
                return (
                    <div key={each.id} className='flex items-center gap-4'>
                        <img src={each.image} alt="image" className='w-12 py-4'/>
                        <div className='w-56 px-3 py-2 shadow-md'>
                            <p className='text-[12px]'>{each.title}</p>
                            <p className='text-[12px]'>Rating: <b>{each.rating.rate}</b></p>
                            <p className='text-[12px]'>Price: <b>${each.price}</b></p>
                        </div>
                        <div className='pl-5 hover:cursor-pointer' onClick={() => removeCart(each.id)}>
                            <DeleteIcon className='text-red-500'/>
                        </div>
                    </div>
                )
            })
            :
            null}
        </div>
        <div className='absolute bottom-0 mb-10 w-full'>
            <h1 className='pb-4'>Total Amount: <span className='font-bold'>${total}</span></h1>
            <hr />
            <button className='mt-4 flex mx-auto bg-black text-white px-10 py-1 rounded-full shadow-md'>Pay</button>
        </div>
    </div>
  )
}

export default Cart