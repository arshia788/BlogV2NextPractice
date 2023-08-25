import React from 'react'

export default function SliderCircles({data, activeSlide, setActiveSlide}) {
  return (
    <div 
    onClick={()=> setActiveSlide(data)}
    className= {
        data.value === activeSlide.value ?
        'w-6 h-6 bg-green-500 rounded-full cursor-pointer'
        :
        'w-6 h-6 border-2 border-zinc-500 rounded-full cursor-pointer'

    } >

    </div>
  )
}
