import LinkItem from "./LinkItem";
import Cookies from "js-cookie";

// icons---
import { AiOutlineCloseCircle } from 'react-icons/ai';

// redux---
import { useDispatch, useSelector } from "react-redux";

// redux-actions---
import { setUserImageSlice } from "redux/feaures/userImageSlice";
import { setRoleValue } from "redux/feaures/roleSlice";
import { checkingLogged } from "redux/feaures/logeedSlice";
import { setUsername } from "redux/feaures/usernameSlice";

export default function UserMenu({ menu, setMenu }) {


  const userName= useSelector(store=> store.usernameSlice.value); 
  console.log(userName);

  const dispatch= useDispatch();

  function logOutHandler(){
    Cookies.set('token','', {expires:0});

    dispatch(setRoleValue(4));
    dispatch(checkingLogged(false));
    dispatch(setUserImageSlice());
    dispatch(setUsername(''));
    setMenu(!menu);

  }


  return (
    <div className={
      menu ?
        'w-[320px] h-[100vh] backdrop-blur-sm bg-[#000000cc] fixed top-0 left-0 bottom-0 flex justify-center items-center transition-all duration-300 animate-slide-right'
        :
        'w-[320px] h-[100vh] backdrop-blur-sm bg-[#000000cc] fixed top-0 left-0  flex justify-center items-center transition-all duration-300 animate-slide-left'
    }
    >

      <AiOutlineCloseCircle
        onClick={() => setMenu(false)}
        className="text-white w-8 cursor-pointer h-8 absolute right-1 top-3" />

      <div className="flex flex-col gap-2">
        <LinkItem title='My-blogs' link={`/blogs/${userName}`}/>
        <LinkItem title='setting' link={'/setting'} />
        <LinkItem title='notifications' link={'/notifications'} />
        <LinkItem title='followers' link={'/follow/followers'} />
        <LinkItem title='followings' link={'/follow/followings'} />
        <LinkItem title='createPosts' link={'/createPosts'} />
        <LinkItem title='allPosts' link={'/my-posts/all'} />
        <LinkItem title='drafts' link={'/my-posts/drafts'} />
        <LinkItem title='published' link={'/my-posts/published'} />
        <LinkItem title='waiting' link={'/my-posts/waiting'} />
        <LinkItem title='bookmarked' link={'/my-posts/bookmarked'} />
        <LinkItem title='liked' link={'/my-posts/liked'} />

        <button
        
        onClick={logOutHandler}
        className="bg-red-500 rounded px-2 py-2 text-[1.1rem] text-white"
        >Logout</button>
      </div>

    </div>
  )
}
