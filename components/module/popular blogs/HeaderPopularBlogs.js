import Link from 'next/link';

export default function HeaderPopularBlogs() {
  return (
    <header className='flex justify-between items-center'>
      
        <Link 
        href={'/'}
        className='bg-blue-700 rounded px-2 py-1 text-white'>
            All
        </Link>

        <div className='flex justify-between items-center gap-x-2'>
            <h2 className='font-bold text-xl'>Most Blogs</h2>
            <div className='flex justify-between items-center gap-x-4'>

              <button className='rounded bg-pink-500 text-white px-2 py-1'>
                MostViewed
              </button>

              <button className='rounded bg-pink-500 text-white px-2 py-1'>
                MostLiked
              </button>

              <button className='rounded bg-pink-500 text-white px-2 py-1'>
                MostComments
              </button>

            </div>

        </div>

    </header>
  )
}
