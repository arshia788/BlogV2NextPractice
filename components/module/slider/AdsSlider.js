import Image from "next/image";

export default function AdsSlider() {
  return (
    <div className='flex flex-col  h-[360px] '>

      <Image
        className="h-[180px] w-full rounded-lg mb-4"
        src={'/images/ads/150_modern_furniture_social_media_post_template.jpg'}
        alt="ads"
        width={1000}
        height={8000}
      />

      <Image
        className="h-[180px] w-full rounded-lg"
        src={'/images/ads/370_digital_marketing_media_post_template.jpg'}
        alt="ads"
        width={1000}
        height={8000}
      />

    </div>
  )
}
