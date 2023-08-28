import { GoComment } from 'react-icons/go';
import { BiLike } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';


export default function BigCard({ data }) {
  return (
    <div className='relative rounded overflow-hidden'>
      
      <div className='w-full h-full rounded'>
        <Image src={data.image} alt={data.title} width={1000} height={800}
        className='w-full h-full'
        />
      </div>

      <div className='flex flex-col gap-4 absolute bg-[#ffffffee] bottom-2 p-1 right-2 left-2 rounded-md'>

        <Link href={data.slug} className='font-semibold text-ld mb-2'>
          <h3>{data.title}</h3>
        </Link>

        <p className='text-zinc-500 '>{data.short_desc}</p>

      </div>

      <div className='absolute top-4 left-4 p-1 bg-zinc-100 flex justify-between items-center rounded gap-x-4'>

        <span className="flex items-center">
          <GoComment className="text-blue-700 text-md" />
          {data.comments_number}
        </span>

        <span className="flex items-center">
          <BiLike className="text-blue-700 text-md" />
          {data.view_number}
        </span>
      </div>

    </div>
  )
}
