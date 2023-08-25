import React from 'react'

export default function SliderButtons({ data, activeSlide, setActiveSlide }) {



    return (
        <div 
        onClick={() => setActiveSlide(data)}
        className={
            data.value === activeSlide.value
                ?
                "line-clamp-1 rounded-md hover:bg-blue-600 trasnsiion-all duration-200 bg-blue-500 text-white w-[250px] h-12 flex justify-center items-center cursor-pointer"
                :

                "line-clamp-1 rounded-md hover:bg-blue-600 trasnsiion-all duration-200 bg-blue-300 text-white w-[250px] h-12 flex justify-center items-center cursor-pointer"
        }
        >

            <div
                
                className="line-clamp-1">
                {data.title}
            </div>

        </div>
    )
}
