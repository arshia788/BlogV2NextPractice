'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


// campo---
import FollowersPage from "components/templates/follow/FollowersPage";
import FollowingPage from "components/templates/follow/FollowingPage";


export default function page({params}) {

    const route= params.slug[0];


    const [showCampo, setShowCampo]= useState(<FollowersPage />);

    useEffect(()=>{

        if(route === 'followers') setShowCampo(<FollowersPage />)
        else if(route === 'followings') setShowCampo(<FollowingPage />)

    },[])
    


    return (
        <div>
            {showCampo}
        </div>
    )
}
