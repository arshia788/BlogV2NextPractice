import LinkItem from "./LinkItem";

export default function UserMenu({menu, setMenu}) {

  return (
    <div className={
        menu ?"fixed top-0 left-0 bottom-0 h-[100vh] bg-[#000000cc] flex justify-center items-center w-[300px]  transition-all duration-500" :"fixed top-0 -left-200 bottom-0 h-[100vh] transition-all duration-500 bg-[#000000cc] flex justify-center items-center w-[300px]"
    }
    >

        <div className="flex flex-col gap-4">
            <LinkItem title='setting' link={'/setting'}/>
            <LinkItem title='notifications' link={'/notifications'}/>
            <LinkItem title='followers' link={'/follow/followers'}/>
            <LinkItem title='followings' link={'/follow/followings'}/>
            <LinkItem title='createPosts' link={'/createPosts'}/>
            <LinkItem title='allPosts' link={'/my-posts/all'}/>
            <LinkItem title='drafts' link={'/my-posts/drafts'}/>
            <LinkItem title='published' link={'/my-posts/published'}/>
            <LinkItem title='waiting' link={'/my-posts/waiting'}/>
            <LinkItem title='bookmarked' link={'/my-posts/bookmarked'}/>
            <LinkItem title='liked' link={'/my-posts/liked'}/>
        </div>

    </div>
  )
}
