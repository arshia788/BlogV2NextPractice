'use client';

import { FiSearch } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { useState } from 'react';



export default function HeaderSearch() {

    const [showArrow, setShowArrow] = useState(false);

    const changeHandler = (e) => {

        if (e.target.value.length > 0) {
            setShowArrow(true)
        } else {
            setShowArrow(false)
        }

    }


    return (

        <div className='flex justify-between items-center
             bg-pink-100 rounded-full py-2 px-1 w-[300px] ml-12'>

            <FiSearch className='w-6 h-6 text-gray-600 mr-2' />
            <input placeholder='search...'
                className='bg-transparent outline-none w-80 '
                onChange={changeHandler}
            />

            <div className="w-8">
                <FiArrowRight
                    className={`${showArrow ? " static transition-all duration-300" : 'w-4 h-4 hidden transition-all duration-300'}`}
                />
            </div>
        </div>
    )
}
