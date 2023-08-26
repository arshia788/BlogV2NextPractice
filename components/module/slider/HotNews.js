'use client';

import Link from "next/link";
import { useState } from "react";


export default function HotNews() {

    const newslist = [
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            link: '/post1',
            value: 0
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            link: '/post2',
            value: 1
        },
        {
            title: 'Lorem ipsum dolor sit',
            link: '/post3',
            value: 2
        },
    ];

    const [listHotNews, setListHowNews] = useState(newslist[0]);

    setTimeout(()=>{

        const item= listHotNews.value;

        if(item === newslist.length -1){
            setListHowNews(newslist[0])
        }
        else{

            // in dar asal misheh ye array ba [value + 1]
            setListHowNews(newslist[item + 1])
        }

    },3000)

    return (
        <div>
            <div className="flex justify-start items-start">
                <span className="font-bold">
                    Hotest:
                </span>
                <Link
                    className="line-clamp-1 w-[500px]"
                    href={listHotNews.link}>

                    {listHotNews.title}
                </Link>
            </div>
        </div>
    )
}
