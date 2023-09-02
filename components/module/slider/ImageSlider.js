import Image from 'next/image'
import React from 'react'

export default function ImageSlider({data}) {


  return (
    <div className='relative w-full h-[360px] p-2'>
        <Image src={data.src} alt={data.title} fill sizes='100'
        className='object-cover rounded-lg'/>
    </div>
  )
}
