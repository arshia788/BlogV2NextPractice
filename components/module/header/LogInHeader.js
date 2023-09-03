'use client';

import HeaderSearch from './HeaderSearch';

import { IoNotificationsOutline } from 'react-icons/io5';

import { FiMoon } from 'react-icons/fi';
import { BsSun } from 'react-icons/bs';

import LogInUserImage from './LogInUserImage';

export default function LogInHeader() {


    return (
        <div className='flex justify-between items-center gap-x-4 '>

            <HeaderSearch />

        

            {/* notif */}
            <div className='relative'>
                <IoNotificationsOutline className='w-6 h-6 text-white' />
                <span className='absolute -top-2 -right-4  text-md bg-red-400 w-5 h-5 flex justify-between items-center text-white rounded-full p-1'>4</span>
            </div>

            <LogInUserImage />


        </div>
    )
}
