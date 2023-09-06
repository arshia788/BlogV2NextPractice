import SettingPage from 'components/templates/SettingPage';
import { cookies } from 'next/headers';



export default function Setting() {

  const cookieStore= cookies();
  const token= cookieStore.get('token') ?cookieStore.get('token').value :null

  return (
    <div>
      <SettingPage token={token}/>
    </div>
  )
}
