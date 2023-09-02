import Image from "next/image";

export default function AdsSlider() {
  return (
    <div className='flex flex-col justify-between h-[360px] '>

      <div className="relative w-[160px] h-[150px] rounded overflow-hidden">
        <Image
          fill
          sizes="100"
          className=" object-cover"
          src={'/images/ads/150_modern_furniture_social_media_post_template.jpg'}
          alt="ads"
        />
      </div>

      <div className="relative w-[160px] h-[150px] rounded overflow-hidden"> 
        <Image
          fill
          sizes="100"
          className="object-cover"
          src={'/images/ads/370_digital_marketing_media_post_template.jpg'}
          alt="ads"
        />
      </div>

    </div>
  )
}
