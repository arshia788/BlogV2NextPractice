
import HeaderSearch from 'components/module/HeaderSearch'
import LogInHeader from 'components/module/LogInHeader'
import Image from 'next/image';

export default function Header() {


    return (
        <header className='flex justify-between items-center bg-blue-700 p-2'>

            <div className=' w-[230px]'>
                <Image src={'/logo.svg'} width={40} height={40} alt='logo'/>
            </div>

            <HeaderSearch />
            <LogInHeader />
        </header>
    )
}
