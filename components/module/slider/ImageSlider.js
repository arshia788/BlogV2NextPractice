import Image from 'next/image'
import React from 'react'

export default function ImageSlider() {
  return (
    <div className='relative w-[600px] h-[400px] p-2'>
        <Image src={'/images/posts/laptop1.jpg'} alt='ads' fill className='object-cover rounded-lg'/>
    </div>
  )
}
