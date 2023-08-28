import AdsPage from 'components/templates/AdsPage'
import CategoriesSearch from 'components/templates/CategoriesSearch'
import MostPopularBlogs from 'components/templates/MostPopularBlogs'
import NewsInfos from 'components/templates/NewsInfos'
import SliderPage from 'components/templates/SliderPage'

export default function page() {
  return (
    <div className='flex flex-col gap-12'>
      <SliderPage />
      <CategoriesSearch />
      <MostPopularBlogs />
      <AdsPage />
      <NewsInfos />
    </div>
  )
}
