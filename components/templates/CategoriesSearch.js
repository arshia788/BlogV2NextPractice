import CategoriesBoxes from 'components/module/slider/CategoriesBoxes';


export default function CategoriesSearch() {

    const categories = [
        {
            title: "JAVASCRIPIT",
            link: '/search/categories/javascripit'
        },
        {
            title: "PYTHON",
            link: '/search/categories/PYTHON'
        }
        ,
        {
            title: "PHP",
            link: '/search/categories/PHP'
        }
        ,
        {
            title: "GO",
            link: '/search/categories/GO'
        }
        ,
        {
            title: "C++",
            link: '/search/categories/C++'
        },
        {
            title: "HTML",
            link: '/search/categories/HTML'
        },

        {
            title: "CSS",
            link: '/search/categories/CSS'
        },
        {
            title: "SWIFT",
            link: '/search/categories/SWIFT'
        },
        {
            title: "KOTLIN",
            link: '/search/categories/KOTLIN'
        },
        {
            title: "JAVA",
            link: '/search/categories/JAVA'
        },
        {
            title: "C#",
            link: '/search/categories/C#'
        },
        {
            title: "ELM",
            link: '/search/categories/ELM'
        },
        {
            title: "ASP.NET",
            link: '/search/categories/ASP.NET'
        },
        {
            title: "RUBY",
            link: '/search/categories/RUBY'
        },
    ];

    return (
        <div className='bg-zinc-200 rounded p-2 flex flex-col gap-4'>
            
            <p className='font-bold text-md ml-5'>Search by our tags.</p>

            <div className='flex justify-around items-center flex-wrap'>
                {
                    categories.map((item, index) => (
                        <CategoriesBoxes data={item} key={index} />
                    ))
                }
            </div>

        </div>
    )
}
