import MostWeblogsCard from "components/module/shared/MostWeblogsCard";
import NewestCards from "components/module/shared/NewestCards";

export default function NewsInfos() {

    const blogersInfo = [
        {
            image: '/images/ads/5556583.jpg',
            title: 'TestWeblog',
            short_desc: 'Weblog for Next.js',
            link:'/link1'
        },
        {
            image: '/images/ads/5556583.jpg',
            title: 'TestWeblog',
            short_desc: 'Weblog for Next.js',
            link:'/link1'
        },
        {
            image: '/images/ads/5556583.jpg',
            title: 'TestWeblog',
            short_desc: 'Weblog for Next.js',
            link:'/link1'
        },
        {
            image: '/images/ads/5556583.jpg',
            title: 'TestWeblog',
            short_desc: 'Weblog for Next.js',
            link:'/link1'
        },
        {
            image: '/images/ads/5556583.jpg',
            title: 'TestWeblog',
            short_desc: 'Weblog for Next.js',
            link:'/link1'
        },
        {
            image: '/images/ads/5556583.jpg',
            title: 'TestWeblog',
            short_desc: 'Weblog for Next.js',
            link:'/link1'
        },
        {
            image: '/images/ads/5556583.jpg',
            title: 'TestWeblog',
            short_desc: 'Weblog for Next.js',
            link:'/link1'
        },
        {
            image: '/images/ads/5556583.jpg',
            title: 'TestWeblog',
            short_desc: 'Weblog for Next.js',
            link:'/link1'
        },
        {
            image: '/images/ads/5556583.jpg',
            title: 'TestWeblog',
            short_desc: 'Weblog for Next.js',
            link:'/link1'
        },
        {
            image: '/images/ads/5556583.jpg',
            title: 'TestWeblog',
            short_desc: 'Weblog for Next.js',
            link:'/link1'
        },

    ];

    const posts=[
        {
            image:'/images/posts/tablet1.jpg',
            title:'Lorem ipsum dolor sit amet, consectetur adipiscing ',
            short_desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            comments_number:10,
            view_number:120,
            slug:'tablet1',
            date:'1 December 2019'
        }
        ,
        {
            image:'/images/posts/tablet2.jpg',
            title:'Lorem ipsum dolor sit amet, consectetur adipiscing ',
            short_desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            comments_number:22,
            view_number:502,
            slug:'mobile1',
            date:'1 December 2019'
        }
        ,
        {
            image:'/images/posts/tablet3.jpg',
            title:'Lorem ipsum dolor sit amet, consectetur adipiscing',
            short_desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            comments_number:25,
            view_number:12004,
            slug:'tablet1',
            date:'1 December 2019'
        },

        {
            image:'/images/posts/tablet1.jpg',
            title:'Lorem ipsum dolor sit amet, consectetur adipiscing ',
            short_desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            comments_number:10,
            view_number:120,
            slug:'laptop1',
            date:'1 December 2019'
        },
        {
            image:'/images/posts/tablet1.jpg',
            title:'Lorem ipsum dolor sit amet, consectetur adipiscing ',
            short_desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            comments_number:10,
            view_number:120,
            slug:'laptop1',
            date:'1 December 2019'
        },
        {
            image:'/images/posts/tablet1.jpg',
            title:'Lorem ipsum dolor sit amet, consectetur adipiscing ',
            short_desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            comments_number:10,
            view_number:120,
            slug:'laptop1',
            date:'1 December 2019'
        },
        
    ];

  return (
    <section className="bg-zinc-100 grid grid-cols-12 p-2">

        <div className="col-span-4 flex flex-col gap-y-14">
            <h3 className="font-semibold">MostValuedWeblogs</h3>
            {
                blogersInfo.map((item,index)=>(
                    <MostWeblogsCard key={index} data={item}/>
                ))
            }
        </div>

        <div className="col-span-8 flex flex-col gap-y-14">
            <h3 className="font-semibold">Newest</h3>
            {
                posts.map((item,index)=>(
                    <NewestCards key={index} data={item}/>
                ))
            }
        </div>

    </section>
  )

}
