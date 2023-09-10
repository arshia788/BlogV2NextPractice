'use client';

// redux--
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

// campo---
import UserMenu from "./UserMenu";

// reduxActions---
import userImageSlice from "redux/feaures/userImageSlice";
import { useState } from "react";


export default function LogInUserImage() {

  const [menu, setMenu]= useState(false);

  const userImage= useSelector(store=> store.userImageSlice.value);

  return (
    <div>
      {
        userImage ?
        <div className="w-[50px] h-[50px] relative">
          <Image 
          className="cursor-pointer object-cover rounded-full"
          onClick={()=> setMenu(!menu)}
          src={userImage} alt="userImage" fill />
          </div>
        :
        <Link href={'/signin'} className="bg-white px-2 py-1 text-blue-700 rounded">
          Sign-in/Sgin-up
        </Link>
      }

      {
        menu ? <UserMenu menu={menu} setMenu={setMenu}/> :null
      }
        
    </div>
  )
}
