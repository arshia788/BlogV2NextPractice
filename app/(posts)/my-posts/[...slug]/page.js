'use client';
import { useState, useEffect } from "react";

// router---
import { useRouter } from "next/navigation";

// campo---
import MyAllPosts from "components/templates/posts/MyAllPosts";
import MyDrafts from "components/templates/posts/MyDrafts";
import MyPublishedPosts from "components/templates/posts/MyPublishedPosts";
import MyWaitingPosts from "components/templates/posts/MyWaitingPosts";
import LikedPosts from "components/templates/posts/LikedPosts";
import BookmarkedPosts from "components/templates/posts/BookmarkedPosts";


export default function Posts({params}) {
  
  const route = params.slug[0];

  const router= useRouter();

  const [checkRoute, setCheckRoute]= useState( <MyAllPosts />);

  useEffect(()=>{


    console.log(route);

    if(route !== "all" && route !== "drafts" && route !== "published" &&route !== "waiting" && route !== "liked" && route !== "bookmarked"){
      
      router.push('/my-posts/all')
    }

    if(route==='all') setCheckRoute(<MyAllPosts/>);
    else if(route === 'drafts') setCheckRoute(<MyDrafts />);
    else if(route === 'published') setCheckRoute(<MyPublishedPosts />);
    else if(route === 'waiting') setCheckRoute(<MyWaitingPosts />);
    else if(route === 'liked') setCheckRoute(<LikedPosts />)
    else if(route === 'bookmarked') setCheckRoute(<BookmarkedPosts />)

  },[])

  return (
    <div>
      {checkRoute}
    </div>
  )
}
