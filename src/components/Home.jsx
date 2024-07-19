import React from 'react'
import Carousel from './Carousel'
import img1 from '../assets/mehrab-zahedbeigi-ywPhk6fNvl8-unsplash.jpg'
import img2 from '../assets/malicki-m-beser-PKMvkg7vnUo-unsplash.jpg'
import img3 from '../assets/joshua-rawson-harris-L2kkaayv3YY-unsplash.jpg'
import img4 from '../assets/clem-onojeghuo-iuvLYv85r40-unsplash.jpg'
import img5 from '../assets/christopher-ott-WDwOvs7QHIk-unsplash.jpg'
import brand1 from '../assets/Chanel-Logo-3501633666.png'
import brand2 from '../assets/Calvin-Klein-Emblem-1564794283.png'
import brand3 from '../assets/Ralph-Lauren-logo-2716474888.png'
import brand4 from '../assets/dolce-gabbana-1-logo-png-transparent-1530224652.png'
import brand5 from '../assets/Adidas-Logo-1971-present-1679153898.png'
import brand6 from '../assets/Versace-logo-586331835.png'
import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import manwoman  from '../assets/manwoman.jpg'
import man from '../assets/man.jpg'
import man2 from '../assets/man2.jpg'
import woman from '../assets/woman.jpg'
import henri from '../assets/henri-meilhac-KoT2gBk9rzE-unsplash.jpg'
import Navbar from './Navbar'
import Featured from './Featured'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

function Home() {
  let slides = [img4,img2,img3,img5,img1,]
  let brands = [brand1,brand2,brand3,brand4,brand5,brand6,]
  let review = [
    {
      title: 'Original Products',
      description: 'We provide money back guarantee if the product are not original',
      icon: <FlareOutlinedIcon />
    },
    {
      title: 'Satisfaction Guarantee',
      description: "Exchange the product you've purchased if it doesn't fit on you",
      icon: <SentimentSatisfiedAltOutlinedIcon />
    },
    {
      title: 'New Arrival Everyday',
      description: 'We updates our collections almost everyday',
      icon: <DeliveryDiningOutlinedIcon />
    },
    {
      title: 'Fast & Free Shipping',
      description: 'We offer fast and free shipping for our loyal customers',
      icon: <LocalShippingOutlinedIcon />
    },
  ]
  return (
    <div className='max-w-[1540px] min-w-[800px] my-11 mx-auto px-10'>
      <Navbar />
      <Carousel slides={slides}/>
      <div className='flex flex-col my-6'>
        <h1 className='text-4xl font-bold'>Brands</h1>
        <div className='flex items-center justify-between my-8 mx-5'>
        {brands.map((each) => {
          return (
            <img className='w-28' src={each} alt="" />
          )
        })}
        </div>
        <div className='flex justify-between items-center'>
          <h1 className='text-5xl font-bold w-[600px]'>We provide best customer experience</h1>
          <div className='flex items-center gap-7'>
            <div className="border-l border-black h-20"></div>
            <p className='text-gray-600'>We ensure our customer have the best shopping experience</p>
          </div>
        </div>
        <div className='flex justify-between my-20'>
          {review.map((each) => {
            return (
              <div className='flex flex-col gap-2'>
                <div className='bg-gray-200 rounded-md p-2 w-10'>
                  {each.icon}
                </div>
                <h1 className='font-semibold text-xl'>{each.title}</h1>
                <p className='text-sm w-64 text-gray-600'>{each.description}</p>
              </div>
            )
          })}
        </div>
        <h1 className='text-4xl font-bold'>Currated picks</h1>
        <div className='flex gap-12 items-center justify-between my-16 overflow-hidden'>
          <div className='relative flex justify-center '>
            <img src={man2} alt="man" className='w-96 h-96 object-cover hover:scale-105 duration-300 cursor-pointer rounded-xl'/>
            <div className='bg-white my-5 px-5 py-3 rounded-md shadow-xl absolute bottom-0 justify-between flex items-center gap-10 cursor-pointer'>
              <button>Best Seller</button>
              <ArrowRightAltIcon />
            </div>
          </div>
          <div className='relative flex justify-center'>
            <img src={man} alt="man" className='w-96 h-96 object-cover hover:scale-105 duration-300 cursor-pointer rounded-xl'/>
            <div className='bg-white my-5 px-5 py-3 rounded-md shadow-xl absolute bottom-0 justify-between flex items-center gap-10 cursor-pointer '>
              <button>Shop Men</button>
              <ArrowRightAltIcon />
            </div>
          </div>
          <div className='relative flex justify-center'>
            <img src={woman} alt="man" className='w-96 h-96 object-cover hover:scale-105 duration-300 cursor-pointer rounded-xl'/>
            <div className='bg-white my-5 px-5 py-3 rounded-md shadow-xl absolute bottom-0 justify-between flex items-center gap-10 cursor-pointer '>
              <button>Shop Women</button>
              <ArrowRightAltIcon />
            </div>
          </div>
          <div className='relative flex justify-center'>
            <img src={manwoman} alt="man" className='w-96 h-96 object-cover hover:scale-105 duration-300 cursor-pointer rounded-xl'/>
            <div className='bg-white my-5 px-5 py-3 rounded-md shadow-xl absolute bottom-0 justify-between flex items-center gap-10 cursor-pointer '>
              <button>Shop Casual</button>
              <ArrowRightAltIcon />
            </div>
          </div>
        </div>
        <Featured />
        <div className='flex bg-gray-900 rounded-md shadow-md items-center my-10'>
          <img src={henri} alt="lgoo" className='w-[600px]'/>
          <div className='px-10'>
            <div className='flex flex-col'>
              <p className='text-white font-light'>LIMITED OFFER</p>
              <h1 className='text-white text-7xl font-bold'>35% off only this friday get specal gift</h1>
              <div className=''>
                <button className='bg-white px-5 text-sm py-2 mt-6 rounded-md shadow-md'>Grab it now <ArrowRightAltIcon /></button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between mx-auto'>
          <div className='flex flex-col text-center w-[70%] mx-auto'>
            <h1 className='text-3xl font-bold'>Subscribe to our newsletter to get updates to our latest collections</h1>
            <p className='text-sm text-gray-500 my-3'>Get 20% off on your first order just by subscribing to our newsletter</p>
            <div className='flex items-center justify-center my-3'>
              <div className='flex items-center border-2 rounded-lg rounded-r-none px-4 py-2 gap-3'>
                <MailOutlineOutlinedIcon className='text-gray-400'/>
                <input type="email" placeholder='Enter your email' className='focus:outline-none' />
              </div>
              <button className='text-white bg-gray-900 px-5 py-2 rounded-md rounded-l-none'>Subscribe</button>
            </div>
            <p className='text-sm text-gray-500'>You will be able to unsubscribe at any time. <br /> Read our Privacy Policy <span className='underline font-bold text-black hover:cursor-pointer'>here</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home