'use client';

import { IoNotificationsOutline } from 'react-icons/io5';

import { FiMoon } from 'react-icons/fi';
import { BsSun } from 'react-icons/bs';

import { useState } from 'react';

export default function LogInHeader() {

    const [changeIcon, setChangeIcon] = useState(false);

    const changeIcons=()=>{
        if(changeIcon){
            setChangeIcon(false)
        }else{
            setChangeIcon(true)
        }
    }

    return (
        <div className='flex justify-between items-center gap-x-2  w-[240px]'>

            {/* signin */}
            <button className='bg-white border-none rounded px-2 py-1'>
                <p>signUp / signIn</p>
            </button>

            {/* notif */}
            <div className='relative'>
                <IoNotificationsOutline className='w-6 h-6 text-white'/>
                <span className='absolute -top-2 -right-4  text-md bg-red-400 w-5 h-5 flex justify-between items-center text-white rounded-full p-1'>4</span>
            </div>

            {/* dark/light */}
            <div className='flex cursor-pointer'
            onClick={changeIcons}
            >
                {
                    changeIcon ?
                    <FiMoon className='text-gray-400 w-6 h-6'/>
                    :
                    <BsSun className='text-orange-500 w-6 h-6'/>
                }

            </div>

        </div>
    )
}
