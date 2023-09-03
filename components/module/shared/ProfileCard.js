import Image from "next/image";
import Link from "next/link";

export default function ProfileCard({data}) {

  return (
    <article className="shadow-[0px_10px_10px_rgba(0,0,0,0.25)] rounded-md flex justify-start items-center gap-2 h-[250px] p-4 mb-8">
        
        {/* image left */}
        <div className="relative w-[300px] min-w-[300px] h-[180px] rounded overflow-hidden "> 
            <Image src={data.image} alt={data.title} fill className="object-cover" sizes="100"/>
        </div>

        {/* info right. */}
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold">{data.title}</h3>
                <p className="bg-blue-700 px-3 py-1 rounded text-white">{data.date}</p>
            </div>

            <p className="w-full h-[100px] line-clamp-1 text-zinc-500">{data.short_desc}</p>

            <div className="flex justify-between items-center ">

                <div className="flex justify-between items-center gap-4">
                    <p className="text-blue-700">comments:<span className="text-black">{data.comments_number}</span></p>
                    <p className="text-blue-700">views: <span className="text-black">{data.view_number}</span> </p>
                </div>

                <Link 
                className="bg-blue-700 rounded text-white px-3 py-1"
                href={data.slug}>
                    continue
                </Link>
            </div>
        </div>

    </article>
  )
}
