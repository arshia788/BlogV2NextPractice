import ProfilePage from 'components/templates/ProfilePage';

export default function ProfileDetail({params}) {

    const profileId= params.profileId;
    
    return (
        <ProfilePage id={profileId}/>
    )
}
