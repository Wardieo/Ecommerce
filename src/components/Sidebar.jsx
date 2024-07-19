import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Sidebar = ({ handle, categ, setRating, rating, setMin, setMax }) => {
    const [category, setCategory] = useState([])
    const [drop, setDrop] = useState(true)
    const [drop2, setDrop2] = useState(false)

    useEffect(() => {
        const getCategory = async () => {
            try{
                const category = await Axios.get("https://fakestoreapi.com/products/categories")
                setCategory(category.data)
            }catch{
                console.log("ERROR", error)
            }
        }
        getCategory();
    }, [])

  return (
    <div className=''>
        <div className='flex flex-col items-start border-r-2 w-[100%] h-full'>
            <div className='border-b-2 w-full flex items-center pt-6 pb-5 pl-6 justify-between'>
                <h1 className='text-2xl font-extrabold text-center'>NOSTRA</h1>
            </div>
            <div className='pt-6 pb-5 pl-6'>
                <h1 className='font-bold'>Category</h1>
                <div className='border-b-2 w-48 pb-5'>
                    {category.map((each, index) => {
                        return (
                            <div key={index}>
                                <ul className='text-sm pl-2 pt-2 flex flex-col gap-1 text-gray-500'>
                                    <li onClick={(id) => {handle(id)}} className={categ === each ? 'hover:cursor-pointer text-black font-medium' : 'hover:cursor-pointer '}>{each}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
                <div className=''>
                    <h1 className='font-bold'>Filter by:</h1>
                    <div onClick={() => setDrop(!drop)} className='flex hover:cursor-pointer items-center justify-between pt-3 pr-3'>
                        <h1 className='font-bold'>Rating</h1>
                        <KeyboardArrowDownOutlinedIcon className={drop ? 'text-sm text-gray-500 rotate-180 duration-300 transition' : 'text-sm text-gray-500' } onClick={() => setDrop(!drop)}/>
                    </div>
                    <div className='overflow-hidden'>
                    {drop ? 
                        <div className='px-2 pt-2 text-sm flex flex-col duration-300 translate-y-0 gap-1 text-gray-500'>
                            <div>
                                <input type="checkbox" onChange={() => setRating(4)} checked={rating === 4 ? true : false}/>
                                <span className='ml-2'>4 & above </span>
                            </div>
                            <div>
                                <input type="checkbox" onChange={() => setRating(3)} checked={rating === 3 ? true : false}/>
                                <span className='ml-2'>3 & above</span>
                            </div>
                            <div className='flex items-center'>
                                <input type="checkbox" onChange={() => setRating(2)} checked={rating === 2 ? true : false}/>
                                <span className='ml-2'>2 & above </span>
                            </div>
                            <div>
                                <input type="checkbox" onChange={() => setRating(1)} checked={rating === 1 ? true : false}/>
                                <span className='ml-2'>1 & above</span>
                            </div>
                        </div>
                        :
                        <div className='px-2 pt-2 text-sm duration-300 -translate-y-[100%] text-gray-500'>
                            <div className='hidden'>
                                <input type="checkbox"/>
                                <span className='ml-2'>4 & above </span>
                            </div>
                            <div className='hidden'>
                                <input type="checkbox"/>
                                <span className='ml-2'>3 & above</span>
                            </div>
                            <div className='hidden'>
                                <input type="checkbox"/>
                                <span className='ml-2'>2 & above </span>
                            </div>
                            <div className='hidden'>
                                <input type="checkbox"/>
                                <span className='ml-2'>1 & above</span>
                            </div>
                        </div>}
                        <div onClick={() => setDrop2(!drop2)} className='flex hover:cursor-pointer items-center justify-between pt-2 pr-3'>
                            <h1 className='font-bold'>Price</h1>
                            <KeyboardArrowDownOutlinedIcon className={drop2 ? 'text-sm text-gray-500 rotate-180 duration-300 transition' : 'text-sm text-gray-500' } onClick={() => setDrop2(!drop2)}/>
                        </div>
                        <div className='overflow-hidden'>
                            {drop2 ? 
                                <div className='px-2 pt-2 text-sm flex flex-col duration-300 translate-y-0 gap-1 w-48 text-gray-500'>
                                    <div className='flex flex-col gap-3'>
                                        <input type="number" placeholder='Min' onChange={(e) => setMin(e.target.value)} className='focus:outline-none text-sm text-black border-2 px-3 py-2 rounded-sm'/>
                                        <input type="number" placeholder='Max' onChange={(e) => setMax(e.target.value)} className='focus:outline-none text-sm text-black border-2 px-3 py-2 rounded-sm'/>
                                    </div>
                                </div>
                                :
                                <div className='px-2 pt-2 text-sm duration-300 -translate-y-[100%] text-gray-500'>
                                    <div className='hidden'>
                                        <input type="number" placeholder='Min' />
                                        <input type="number" placeholder='Max' />
                                    </div>
                                </div>}
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar