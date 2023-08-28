import AdsBox from "components/module/AdsBox"

export default function AdsPage() {

  return (
    <section className="flex justify-between items-center">
      <AdsBox goal_link={'/'} goal_alt={'test'} goal_img_link={'/images/ads/150_modern_furniture_social_media_post_template.jpg'} />
      <AdsBox goal_link={'/'} goal_alt={'test'} goal_img_link={'/images/ads/5556583.jpg'} />
      <AdsBox goal_link={'/'} goal_alt={'test'} goal_img_link={'/images/ads/370_digital_marketing_media_post_template.jpg'} />
      <AdsBox goal_link={'/'} goal_alt={'test'} goal_img_link={'/images/ads/business_social_media_banner_19.jpg'} />
    </section>
  )
}
