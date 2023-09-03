import LogInHeader from 'components/module/header/LogInHeader';
import Image from 'next/image';
import Link from 'next/link';

import { cookies } from 'next/headers';

export default async function Header() {

    const cookieStore= cookies();
    const token= cookieStore.get('token') ? cookieStore.get('token').value : undefined;
    
    console.log(token);


    return (
        <header className='flex justify-between items-center bg-blue-700 p-2 sticky top-0 left-0 right-0 z-10'>

            <Link href={'/'} as={''}>
                <Image src={'/logo.svg'} width={40} height={40} alt='logo'/>
            </Link>

            <LogInHeader />
        </header>
    )
}
