import Link from "next/link";
import HeaderPopularBlogs from "components/module/popular blogs/HeaderPopularBlogs";

export default function MostPopularBlogs() {

    const posts = [
        {
            image: '/images/posts/tablet1.jpg',
            title: 'لورم ایپسوم متن ساختگی ',
            short_desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number: 10,
            view_number: 120,
            slug: 'tablet1',
        }
        ,
        {
            image: '/images/posts/tablet2.jpg',
            title: 'لورم ایپسوم متن ساختگی ',
            short_desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number: 22,
            view_number: 502,
            slug: 'mobile1',
        }
        ,
        {
            image: '/images/posts/tablet3.jpg',
            title: 'لورم ایپسوم متن ساختگی ده از طراحان گرافیک است چاپگرها و متون بلکه ده از طراحان گرافیک است چاپگرها و متون بلکه ',
            short_desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number: 25,
            view_number: 12004,
            slug: 'tablet1',
        },

        {
            image: '/images/posts/tablet1.jpg',
            title: 'لورم ایپسوم متن ساختگی ',
            short_desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number: 10,
            view_number: 120,
            slug: 'laptop1',
        },
    ];

    return (
        <section>
            <HeaderPopularBlogs />
        </section>
    )
}
