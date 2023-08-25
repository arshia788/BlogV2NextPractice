import React from 'react'
import ImageSlider from './ImageSlider'
import SliderButtons from './SliderButtons'
import AdsSlider from './AdsSlider'

export default function LeftSliderPage() {

  const posts = [
    {
      title: 'Lorem ipsum dolor',
      text: 'slider1'
    }
    ,
    {
      title: 'Lorem  consectetur adipiscing elit,',
      text: 'slider2'
    }
    ,
    {
      title: 'Lorem ipsum dolor sit amet',
      text: 'slider3'
    }
    ,
    {
      title: 'Lorem ipsum dolor sit amet, consectetur ',
      text: 'slider4'
    }
    ,

  ]
  return (
    <div className='flex justify-between items-center w-full h-[400px] p-2'>

      <div className='flex flex-col gap-6'>
        {
          posts.map((item, index) => {
            return (
              <SliderButtons key={index} data={item} />
            )
          })
        }
      </div>


      <div className='w-full flex justify-center items-center p-4'>
        <ImageSlider />
      </div>

    </div>
  )
}
