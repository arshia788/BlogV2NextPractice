import Image from 'next/image'
import React from 'react'

export default function MostWeblogsCard({data}) {
  return (
    <div className='flex justify-start items-center gap-4'>

        <div className='w-[60px] rounded-full overflow-hidden'>
            <Image src={data.image} alt={data.title} width={1000} height={800} 
            className='w-full'
            />
        </div>

        <div className='flex flex-col gap-y-2'>
            <h4 className='font-semibold'>{data.title}</h4>
            <span className='text-zinc-500'>{data.short_desc}</span>
        </div>

    </div>
  )
}
