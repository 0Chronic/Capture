import React from 'react'



import Image from 'next/image'



import InstagramImg from './Instagramimg'

const Instagram = () => {
  return (
    <div>
        <p>Follow me on Instagram</p>
        <p>@Captur</p>
        <div className='relative'>

        <Image src="/ig-img-1.jpeg" alt="Instagram Image 1" width={500} height={500} className='w-full h-full' layout='reponsive' />
      <Image src="/ig-img-2.jpeg" alt="Instagram Image 2" width={500} height={500} />
      <Image src="/ig-img-3.jpeg" alt="Instagram Image 3" width={500} height={500} />
      <Image src="/ig-img-4.jpeg" alt="Instagram Image 4" width={500} height={500} />
          <InstagramImg />
        </div>
    </div>
  )
}

export default Instagram