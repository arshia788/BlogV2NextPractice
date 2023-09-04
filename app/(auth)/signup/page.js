import SignUpPage from 'components/templates/SignUpPage';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function SignUp() {

  const cookieStore= cookies(); 
  const token= cookieStore.get('token').value;

  if(token){
    redirect('/')
  }

  return (
    <div className='bg-white'>
      <SignUpPage />
    </div>
  )
}
