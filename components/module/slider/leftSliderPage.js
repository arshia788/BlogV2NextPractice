'use client';

import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import SliderButtons from './SliderButtons';
import SliderCircles from './SliderCircles';


export default function LeftSliderPage() {


  const posts = [
    {
      title: 'Lorem ipsum dolor',
      link: '/posts/post1',
      src: '/images/posts/laptop2.jpg',
      value: 1,
    }
    ,
    {
      title: 'Lorem  consectetur adipiscing elit,',
      link: '/posts/post2',
      src: '/images/posts/tablet1.jpg',
      value: 2
    }
    ,
    {
      title: 'Lorem ipsum dolor sit amet',
      link: "/posts/posts3",
      src: "/images/posts/mobile1.jpg",
      value: 3
    }
    ,
    {
      title: 'Lorem ipsum dolor sit amet, consectetur ',
      link: "/posts/posts4",
      src: "/images/posts/tablet1.jpg",
      value: 4
    }
    ,
    {
      title: 'Lorem ipsum dolor sit amet, consectetur ',
      link: "/posts/posts5",
      src: "/images/posts/tablet2.jpg",
      value: 5
    }
    ,
  ];

  const [activeSlide, setActiveSlide] = useState(posts[0]);

  return (
    <div className='relative flex justify-between items-center w-full h-[400px] p-2'>

      <div className='flex flex-col gap-6'>
        {
          posts.map((item, index) => {
            return (
              <SliderButtons activeSlide={activeSlide} setActiveSlide={setActiveSlide}
                key={index} data={item} />
            )
          })
        }
      </div>


      <div className='w-full flex justify-center items-center p-4'>
        <ImageSlider data={activeSlide} activeSlide={activeSlide} />
      </div>

      <div className='absolute right-10 bottom-5 h-full flex flex-col justify-center gap-y-4 '>

        {
          posts.map((item,index)=>(
            <SliderCircles data={item} key={index} activeSlide={activeSlide} setActiveSlide={setActiveSlide}/>
          ))
        }

      </div>

    </div>
  )
}
