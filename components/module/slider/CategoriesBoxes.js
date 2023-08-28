import Link from "next/link"

export default function CategoriesBoxes({data}) {
  return (
    <div className="bg-blue-700 rounded-full min-w-[150px] px-3 py-2 w-[100px] text-white flex justify-center items-center m-2 ">

        <Link href={data.link}>
            {data.title}
        </Link>
    </div>
  )
}
