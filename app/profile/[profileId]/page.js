import ProfileCard from 'components/module/shared/ProfileCard'
import Image from 'next/image'
import React from 'react'

export default function ProfileDetail() {

    const data = {
        image: '/images/ads/business_social_media_banner_19.jpg',
        name: 'Blog name',
        short_desc: 'title of the blog is something that I...',
        followers_number: 20,
        following_number: 5,
        posts: [
            {
                image: '/images/posts/tablet1.jpg',
                title: 'title of the blog',
                short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque  ',
                comments_number: 10,
                view_number: 120,
                slug: 'tablet1',
                date: '1 December 1999'
            }
            ,
            {
                image: '/images/posts/tablet2.jpg',
                title: 'title of the blog',
                short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque  ',
                comments_number: 22,
                view_number: 502,
                slug: 'mobile1',
                date: '1 December 1999'
            }
            ,
            {
                image: '/images/posts/tablet3.jpg',
                title: 'title of the blog',
                short_desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque',
                comments_number: 25,
                view_number: 12004,
                slug: 'tablet1',
                date: '1 December 1999'
            },

            {
                image: '/images/posts/tablet1.jpg',
                title: 'title of the blog',
                short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque  ',
                comments_number: 10,
                view_number: 120,
                slug: 'laptop1',
                date: '1 December 1999'
            },
            {
                image: '/images/posts/tablet1.jpg',
                title: 'title of the blog',
                short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque  ',
                comments_number: 10,
                view_number: 120,
                slug: 'laptop1',
                date: '1 December 1999'
            },
            {
                image: '/images/posts/tablet1.jpg',
                title: 'title of the blog',
                short_desc: 'Lorem ipsum dolor sit amet, asdawd ',
                comments_number: 10,
                view_number: 120,
                slug: 'laptop1',
                date: '1 December 1999'
            },

        ],
    }
    return (
        <div className='flex flex-col gap-y-8'>
            
            <section className='flex flex-col gap-4 items-center mt-4'>

                <div className='relative w-[130px] h-[130px] rounded-full overflow-hidden'>
                    <Image src={data.image} fill sizes='100' alt={data.title} className='object-cover'/>
                </div>

                <p>{data.name}</p>
                <p>{data.short_desc}</p>

                <div className='flex justify-between items-center gap-4'>
                    <p>follows: {data.followers_number}</p>
                    <p>following: {data.following_number}</p>
                </div>

                <button className='bg-blue-700 rounded px-10 py-2 text-white'>Follow</button>
                


            </section>

            <section className='p-4'>
                <h2 className='text-lg font-medium mb-4'>My Blogs</h2>

                <div className='flex flex-col '>
                    {
                        data.posts.map((item, index) => <ProfileCard key={index} data={item} />)
                    }
                </div>

            </section>

        </div>
    )
}
