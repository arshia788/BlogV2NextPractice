import Image from "next/image"

export default function AdsBox({goal_link, goal_alt,goal_img_link}) {
  return (
    <div className="p-1">
      <Image src={goal_img_link} alt={goal_alt} width={1000} height={700}
      className="w-[200px] h-[200px] rounded-md "
      />
    </div>
  )
}
