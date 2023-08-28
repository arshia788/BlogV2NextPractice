import Link from "next/link";
import HeaderPopularBlogs from "components/module/popular blogs/HeaderPopularBlogs";
import Card from "components/module/shared/Card";
import BigCard from "components/module/shared/BigCard";

export default function MostPopularBlogs() {

    const posts = [
        {
            image: '/images/posts/tablet1.jpg',
            title: 'Lorem ipsum dolor sit ',
            short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            comments_number: 10,
            view_number: 120,
            slug: 'tablet1',
        }
        ,
        {
            image: '/images/posts/tablet2.jpg',
            title: 'Lorem ipsum dolor sit ',
            short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua asdbiawdasld',
            comments_number: 22,
            view_number: 502,
            slug: 'mobile1',
        }
        ,
        {
            image: '/images/posts/tablet3.jpg',
            title: 'Lorem ipsum dolor sit ',
            short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            comments_number: 25,
            view_number: 12004,
            slug: 'tablet1',
        },

        {
            image: '/images/posts/tablet1.jpg',
            title: 'Lorem ipsum dolor sit ',
            short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            comments_number: 10,
            view_number: 120,
            slug: 'laptop1',
        },
    ];


    return (
        <section className="bg-zinc-200 p-2">
            <HeaderPopularBlogs />

            <div className="grid grid-cols-12 mt-8 gap-x-4">

                <div className="col-span-6 ">
                    <BigCard data={posts[2]}/>
                </div>

                <div className="col-span-3 ">
                    <Card data={posts[1]}/>
                </div>

                <div className="col-span-3 ">
                    <Card data={posts[0]}/>
                </div>

            </div>

        </section>
    )
}
