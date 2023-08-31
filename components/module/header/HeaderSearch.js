'use client';
import { useState } from 'react';

import { FiSearch } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";


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
             bg-zinc-100 rounded-full py-2 px-1 w-[300px] ml-12'>

            <input placeholder='search...'
                className='bg-transparent outline-none w-80 '
                onChange={changeHandler}
            />


            <div className="w-8">

                {
                    showArrow ?

                        <FiArrowRight
                        className='w-5 h-5 text-gray-600 mr-2'
                        />
                        :
                        <FiSearch className='w-5 h-5 text-gray-600 mr-2' />
                }

            </div>

        </div>
    )
}
