import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Axios from 'axios'

const Featured = () => {
    const [feature, setFeature] = useState([])
    useEffect(() => {
        const func = async () => {
            try{
                const res = await Axios.get('https://fakestoreapi.com/products?limit=6')
                setFeature(res.data)

            }catch{
                console.log("Error", error)
            }
        }

        func();
    }, [])

 
    
  return (
    <div className='my-10 flex flex-col overflow-hidden '>
        <div className='flex justify-between items-center'>
            <h1 className='text-4xl font-bold'>Featured products</h1>
        </div>
        <div className='overflow-x-scroll'>
            <div className='flex w-screen items-center gap-4 my-10 transition ease-out duration-300'>
                {feature.map((each) => {
                        return (
                            <div key={each.id} className='flex flex-col'>
                                <div className='border-2 rounded-md shadow-md flex transition w-[400px] h-[500px]'>
                                    <img src={each.image} alt="mage" className='scale-75 flex items-center justify-center mx-auto '/>
                                </div> 
                                <div className='flex justify-between items-center mx-3 pt-5 h-20 gap-10'>
                                    <div className='flex flex-col'>
                                        <p>{each.title}</p>
                                        <p className='pt-2 text-lg font-bold'>${each.price}</p>
                                    </div>
                                    <div className='bg-gray-900 px-3 py-2 rounded-md'>
                                        <button className=''>
                                            <AddShoppingCartOutlinedIcon className='text-white' fontSize='10px' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    </div>
  )
}

export default Featured