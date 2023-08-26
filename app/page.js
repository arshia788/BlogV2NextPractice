import CategoriesSearch from 'components/templates/CategoriesSearch'
import SliderPage from 'components/templates/SliderPage'

export default function page() {
  return (
    <div className='flex flex-col gap-12'>
      <SliderPage />
      <CategoriesSearch />
    </div>
  )
}
