// 'use client';

// redux--
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

// redux--actions
import userImageSlice from "redux/feaures/userImageSlice";

export default function LogInUserImage() {

  const userImage= useSelector(store=> store.userImageSlice.value);

  return (
    <div>
      {
        userImage ?
          <Image src={userImage} alt="userImage" width={50} height={50}/>
        :
        <Link href={'/signin'} className="bg-white px-2 py-1 text-blue-700 rounded">
          Sign-in/Sgin-up
        </Link>
      }
        
    </div>
  )
}
