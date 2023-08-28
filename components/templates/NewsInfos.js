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
            title:'لورم ایپسوم متن ساختگی ',
            short_desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number:10,
            view_number:120,
            slug:'tablet1',
            date:'1بهمن 1500'
        }
        ,
        {
            image:'/images/posts/tablet2.jpg',
            title:'لورم ایپسوم متن ساختگی ',
            short_desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number:22,
            view_number:502,
            slug:'mobile1',
            date:'1بهمن 1500'
        }
        ,
        {
            image:'/images/posts/tablet3.jpg',
            title:'لورم ایپسوم متن ساختگی ده از طراحان گرافیک است چاپگرها و متون بلکه ده از طراحان گرافیک است چاپگرها و متون بلکه ',
            short_desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number:25,
            view_number:12004,
            slug:'tablet1',
            date:'1بهمن 1500'
        },

        {
            image:'/images/posts/tablet1.jpg',
            title:'لورم ایپسوم متن ساختگی ',
            short_desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number:10,
            view_number:120,
            slug:'laptop1',
            date:'1بهمن 1500'
        },
        {
            image:'/images/posts/tablet1.jpg',
            title:'لورم ایپسوم متن ساختگی ',
            short_desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number:10,
            view_number:120,
            slug:'laptop1',
            date:'1بهمن 1500'
        },
        {
            image:'/images/posts/tablet1.jpg',
            title:'لورم ایپسوم متن ساختگی ',
            short_desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number:10,
            view_number:120,
            slug:'laptop1',
            date:'1بهمن 1500'
        },
        
    ];

  return (
    <section className="bg-zinc-100 grid grid-cols-12 p-2">

        <div className="col-span-4 flex flex-col gap-y-14">
            <h3 className="font-semibold">NewestBlogs</h3>
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
