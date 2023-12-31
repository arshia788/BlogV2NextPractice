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


export default function Posts({ params }) {

  const route = params.slug[0];

  const router = useRouter();

  const [num, setNum] = useState(0);

  useEffect(() => {

    if (route !== "all" && route !== "drafts" && route !== "published" && route !== "waiting" && route !== "liked" && route !== "bookmarked") {

      router.push('/my-posts/all')
    }

    if (route === 'all') setNum(1);
    else if(route === 'drafts') setNum(2)
    else if(route === 'published') setNum(3)
    else if(route === 'waiting') setNum(4);
    else if(route === 'liked') setNum(5)
    else if(route === 'bookmarked') setNum(6)

  }, [])

  return (
    <>
      {
        num === 1 && <MyAllPosts />
      }
      {
        num === 2 && <MyDrafts />
      }
      {
        num === 3 && <MyPublishedPosts />
      }
      {
        num === 4 && <MyWaitingPosts />
      }
      {
        num === 5 && <LikedPosts />
      }
      {
        num === 6 && <BookmarkedPosts />
      }
    </>
  )
}
