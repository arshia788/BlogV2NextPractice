import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import SignUpPage from 'components/templates/(auth)/SignUpPage';

export default function SignUp() {

  const cookieStore= cookies(); 
  const token= cookieStore.get('token') ? cookieStore.get('token').value : undefined;

  if(token){
    redirect('/')
  }

  return (
    <div className='bg-white'>
      <SignUpPage />
    </div>
  )
}
