import React, { useEffect, useState } from 'react'
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Axios from 'axios'
import {Link} from 'react-router-dom'


const List = ({ category, search, setCat, rating, min, max, addCart }) => {
    const [list, setList] = useState([])
    
    useEffect(() => {
        const data = async () => {
            try{
                const response = await Axios.get('https://fakestoreapi.com/products')
                setList(response.data)
            }catch{
                console.log("error", error)
            }
        }
        data();
    }, [])

    const filterItems = list.filter(each => { 
        const Category = category === '' ? list : category === each.category;
        const Search = each.title.toLowerCase().includes(search.toLowerCase());
        const Rating = rating === 0 ? list : each.rating.rate >= rating;
        const Min = min === 0 || min === "" ? list : min <= each.price;
        const Max = max === 0 || max === "" ? list : max >= each.price;
        return Category && Search && Rating && Min && Max
    })

  return (
    <div className='max-w-[1240px] min-w-[1100px]'>
        <div className='flex items-center text-sm text-gray-400 gap-3'>
            <Link to='/'><OtherHousesOutlinedIcon className='text-gray-400 hover:cursor-pointer'/></Link>
            <h1 className='font-bold cursor-pointer' onClick={() => setCat('')}>Main Page</h1>
            {category ? <p>| Category | {category}</p> : <p>|  All Products </p>}
        </div>
        <div className='mt-5'>
            {category ? <h1 className='text-4xl font-bold'>{category}</h1> : <h1 className='text-4xl font-bold'>All</h1>}
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
        {filterItems.map((each) => {
            return (
                <div className='mt-10 w-64' key={each.id}>
                    <div className='border-2 rounded-lg rounded-b-none'> 
                    <img src={each.image} alt="img" className='scale-90 object-contain w-64 h-64' />
                    </div>
                    <div className='flex flex-col px-2 py-3 bg-gray-50 shadow-md rounded-t-none'>
                        <h1 className='font-semibold text-sm'>{each.title}</h1>
                        <div className='flex items-center justify-between mt-4'>
                            <div>
                                <p className='text-[12px] text-gray-400'>Price</p>
                                <h1 className='font-semibold'>${each.price}</h1>
                            </div>
                            <button className='bg-gray-700 text-white px-2 py-2 rounded-md shadow-md' onClick={() => addCart(each)}><ShoppingCartOutlinedIcon /></button>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default List