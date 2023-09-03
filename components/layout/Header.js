
import LogInHeader from 'components/module/header/LogInHeader';
import HeaderSearch from 'components/module/header/HeaderSearch';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {


    return (
        <header className='flex justify-between items-center bg-blue-700 p-2 sticky top-0 left-0 right-0 z-10'>

            <button  className=' w-[230px]'>
                <Image src={'/logo.svg'} width={40} height={40} alt='logo'/>
            </button>

            <LogInHeader />
        </header>
    )
}
