import Image from "next/image";
import Link from "next/link";

import { GoComment } from 'react-icons/go';
import { BiLike } from 'react-icons/bi';

export default function Card({data}) {
  return (
    <div className="rounded p-2 bg-[#ffffff]">

        <div className="w-full h-[200px]">
            <Link href={data.slug}>
                <Image src={data.image} alt={data.title} width={1000} height={700} className="w-full rounded"/>
            </Link>
        </div>

        <Link 
        className="font-semibold text-lg "
        href={data.slug} alt={data.title}>
            <h3>{data.title}</h3>
        </Link>

        <div>
            
            <p
            className="text-zinc-400 line-clamp-2 h-[104px]"
            >{data.short_desc}</p>

            <div className="flex justify-between items-center mt-3">

                <div className="flex justify-between items-center gap-x-2">

                    <span className="flex items-center">
                        <GoComment className="text-blue-700 text-md"/>
                        {data.comments_number}
                    </span>

                    <span className="flex items-center">
                        <BiLike className="text-blue-700 text-md"/>
                        {data.view_number}
                    </span>

                </div>

                <Link
                href={data.slug} alt={data.title}
                className="bg-blue-700 text-sm rounded px-3 py-1 text-white">
                    Continue
                </Link>
            </div>

        </div>

    </div>
  )
}
