import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

import { GoComment } from 'react-icons/go';
import { BiLike } from 'react-icons/bi';

export default function NewestCards({ data }) {
    return (
        <article className='bg-[#fff] flex justify-between p-2 rounded h-[16.5rem] gap-4'>


            <div className="flex justify-center items-center">
                <Link href={data.slug} className="relative w-[20rem] h-[15rem] rounded-lg">
                    <Image src={data.image} alt={data.title} width={1000} height={700} className=" rounded-md" />
                </Link>
            </div>

            <div className='flex flex-col justify-between gap-y-4 h-[220px]'>

                <Link href={data.slug} >
                    <h3 className='font-semibold'>{data.title}</h3>
                </Link>

                <p className='text-zinc-500 h-[200px] line-clamp-1'>{data.short_desc}</p>

                <div className='flex justify-between items-center'>

                    <div className='flex justify-between items-center gap-x-3 '>

                        <span className='flex items-center '>
                            {data.comments_number}
                            <GoComment className='text-blue-700'/>
                        </span>

                        <span className='flex items-center'>
                            {data.view_number}
                            <BiLike className='text-blue-700'/>
                        </span>
                    </div>

                    <div className='flex justify-between items-center gap-x-3'>

                        <p className='bg-blue-700 text-white px-3 py-1 rounded'>{data.date}</p>
                        
                        <button className='bg-blue-700 text-white px-3 py-1 rounded'>Continue</button>
                    </div>
                </div>
            </div>


        </article>
    )
}
