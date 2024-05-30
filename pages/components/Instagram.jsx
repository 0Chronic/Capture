import React from 'react'



import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'






import InstagramImg from './Instagramimg'


const Instagram = () => {
  return (

      <div className='max-w-[1240px] mx-auto text-center py-24'>


        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'>@Captur</p>

<InstagramImg />

    </div>

  
  )
}

export default Instagram