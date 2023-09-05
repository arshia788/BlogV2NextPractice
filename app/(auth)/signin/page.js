import SignInPage from 'components/templates/(auth)/SignInPage'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

export default async function SignIn() {

  const cookieStore= cookies(); 
  const token= cookieStore.get('token') ? cookieStore.get('token').value :null;

  if(token){
    redirect('/')
  }
  
  return (
    <div>
      <SignInPage />
    </div>
  )
}
