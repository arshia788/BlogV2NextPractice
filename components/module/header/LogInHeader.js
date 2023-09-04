'use client';

import HeaderSearch from './HeaderSearch';
import LogInUserImage from './LogInUserImage';

// icons--
import { IoNotificationsOutline } from 'react-icons/io5';
import { FiMoon } from 'react-icons/fi';
import { BsSun } from 'react-icons/bs';

// redux--
import { useDispatch } from 'react-redux';

// redux-actions---
import { setUserImageSlice } from 'redux/feaures/userImageSlice';
import { setRoleValue } from 'redux/feaures/roleSlice';
import { checkingLogged } from 'redux/feaures/logeedSlice';
import { userIsActiveToTrue } from 'redux/feaures/user_is_active';


export default function LogInHeader({data}) {

    const dispatch= useDispatch();

    
    dispatch(setUserImageSlice(data?.data.user_image));
    dispatch(setRoleValue(data?.data.role));
    {data?.data.loged ?dispatch(checkingLogged(data?.data.loged)) :null};





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
