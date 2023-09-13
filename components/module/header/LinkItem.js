'use client';

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function LinkItem({title, link}) {

  const path= usePathname();

  
  return (
    <Link 
    className=
    {
      path === link ?
      "w-[200px] px-3 py-2 rounded  text-white  transition-all duration-300 bg-blue-700 hover:text-white text-center text-[1.1rem]"
      :
      "w-[200px] px-3 py-2 rounded  text-white  transition-all duration-300  hover:text-white text-center text-[1.1rem]"
    }

    href={link}>
        {title}
    </Link>
  )
}
