import Image from 'next/image';
import Link from 'next/link';
import { cookies } from 'next/headers';
import LogInHeader from 'components/module/header/LogInHeader';


const getData= async(token)=>{
    const data= await fetch(`${process.env.SERVER_URL}/api/user/checkToken`,{cache:'no-store', headers:{token}});
    return data.json()
}


export default async function Header() {

    const cookieStore = cookies();

    const token= cookieStore.get('token') ? cookieStore.get('token').value :undefined

    console.log('token-----',token);

    const data= await getData(token);

    console.log(data);

    


    return (
        <header className='flex justify-between items-center bg-blue-700 p-2 sticky top-0 left-0 right-0 z-10'>

            <Link href={'/'} as={''}>
                <Image src={'/logo.svg'} width={40} height={40} alt='logo'/>
            </Link>

            <LogInHeader data={data}/>

        </header>
    )
}
