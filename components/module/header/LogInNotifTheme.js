'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IoNotificationsOutline } from 'react-icons/io5';
import { FiMoon } from 'react-icons/fi';
import { BsSun } from 'react-icons/bs';


// reudx
import { useSelector } from 'react-redux';
import HeaderSearch from './HeaderSearch';
import LogInUserImage from './LogInUserImage';
import DarkAndLight from './DarkAndLight';
import UserImageSlice from 'redux/feaures/userImageSlice';


export default function LogInNotifTheme() {

    const userImage = useSelector(store => store.userImageSlice.value);
    // console.log(userImage);

    const [changeIcon, setChangeIcon] = useState(false);

    const changeIcons = () => {
        if (changeIcon) {
            setChangeIcon(false)
        } else {
            setChangeIcon(true)
        }
    };

    return (
        <div className='flex justify-start items-center gap-x-2'>

            <HeaderSearch />

            {
                userImage ?
                    <UserImageSlice />
                    :
                    <Link href={'/signup'} className='bg-white border-none rounded px-2 py-1'>
                        <p>signUp / signIn</p>
                    </Link>
            }

            <DarkAndLight changeIcon={changeIcon} changeIcons={changeIcons} setChangeIcon={setChangeIcon} />

            <LogInUserImage />
        </div>
    )
};
