import MusicalNote from '../../images/musical_note.svg';
import ProfileImg from '../Profile/ProfileImg';

type UserInfoProps = {
  userName: string | undefined,
  userImage: string | undefined,
};

function UserInfo({ userImage, userName }:UserInfoProps) {
  userName = userName || 'Guest';
  userImage = userImage || MusicalNote;
  return (
    <div
      className="flex items-center gap-2
    bg-gray-100 rounded-full h-8"
    >
      <ProfileImg size="8" imageUrl={ userImage } />
      <p
        className="text-gray-950 pr-2"
        data-testid="header-user-name"
      >
        {userName.split(' ')[0]}
      </p>
    </div>
  );
}

export default UserInfo;
