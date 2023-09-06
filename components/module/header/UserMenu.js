import LinkItem from "./LinkItem";


import { AiOutlineCloseCircle } from 'react-icons/ai';


export default function UserMenu({ menu, setMenu }) {

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

      <div className="flex flex-col gap-4">
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
      </div>

    </div>
  )
}
