import SignInPage from 'components/templates/SignInPage'
import { cookies } from 'next/headers'

export default function SignIn() {

  const cookieStore= cookies();
  
  return (
    <div>
      <SignInPage />
    </div>
  )
}
