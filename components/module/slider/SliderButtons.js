import React from 'react'

export default function SliderButtons({ data }) {


    return (
        <div className="line-clamp-1 rounded-md hover:bg-blue-600 trasnsiion-all duration-200 bg-blue-500 text-white w-[250px] h-12 flex justify-center items-center">

            <div className="line-clamp-1">
                {data.title}
            </div>

        </div>
    )
}