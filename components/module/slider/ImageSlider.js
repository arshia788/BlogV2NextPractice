import Image from 'next/image'
import React from 'react'

export default function ImageSlider({data}) {

  console.log(data);

  return (
    <div className='relative w-full h-[400px] p-2'>
        <Image src={data.src} alt={data.title} width={1000} height={800} 
        className='object-cover w-full h-full rounded-lg'/>
    </div>
  )
}
