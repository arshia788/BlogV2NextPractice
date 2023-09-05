import Link from "next/link";

export default function LinkItem({title, link}) {
  return (
    <Link 
    className="w-[200px] px-3 py-2 rounded bg-zinc-400 text-white  transition-all duration-300 hover:bg-blue-700 hover:text-white text-center text-[1.2rem]"
    href={link}>
        {title}
    </Link>
  )
}
