import React from 'react'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'



const InstagramImg = () => {
  return (
  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>

<div className='relative'>
 <Image src="/ig-img-1.jpeg" alt="Instagram Image 1" width={700} height={1000} className='w-full h-full' layout='reponsive' />
        <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group' >
        <p className='text-gray-300 hidden group-hover:block ' ><FaInstagram size={30} /></p>
        </div>
       



     
     
     
  </div>

  <div className='relative'>
 <Image src="/ig-img-2.jpeg" alt="Instagram Image 1" width={500} height={500}  layout='reponsive' />
        <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group' >
        <p className='text-gray-300 hidden group-hover:block ' ><FaInstagram size={30} /></p>
        </div>
       



     
     
     
  </div>


  <div className='relative'>
 <Image src="/ig-img-3.jpeg" alt="Instagram Image 1" width={500} height={500}  layout='reponsive' />
        <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group' >
        <p className='text-gray-300 hidden group-hover:block ' ><FaInstagram size={30} /></p>
        </div>
       



     
     
     
  </div>

  <div className='relative'>
 <Image src="/ig-img-4.jpeg" alt="Instagram Image 1" width={500} height={500} layout='reponsive' />
        <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group' >
        <p className='text-gray-300 hidden group-hover:block ' ><FaInstagram size={30} /></p>
        </div>
       



     
     
     
  </div>

  <div className='relative'>
 <Image src="/ig-img-5.jpeg" alt="Instagram Image 1" width={500} height={500} layout='reponsive' />
        <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group' >
        <p className='text-gray-300 hidden group-hover:block ' ><FaInstagram size={30} /></p>
        </div>
       



     
     
     
  </div>

  <div className='relative'>
 <Image src="/ig-img-6.jpeg" alt="Instagram Image 1" width={500} height={500}  layout='reponsive' />
        <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group' >
        <p className='text-gray-300 hidden group-hover:block ' ><FaInstagram size={30} /></p>
        </div>
       



     
     
     
  </div>

  </div>
  )
}

export default InstagramImg