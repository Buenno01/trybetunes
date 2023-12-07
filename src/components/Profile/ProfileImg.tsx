import GuestImg from '../../images/guest.svg';

type ProfileImgProps = {
  size: '28' | '12' | '8' | '4' | '6' | '1' | '2' | '3',
  imageUrl?: string,
};

function ProfileImg({ imageUrl = undefined, size }:ProfileImgProps) {
  if (!imageUrl) {
    imageUrl = GuestImg;
  }
  const loadOnTailwind = 'w-6 w-1 w-2 w-3 h-6 h-1 h-2 h-3';
  return (
    <span
      className={ `w-${size} h-${size}
  rounded-full overflow-hidden bg-white shadow-lg` }
    >
      <img
        data-testid="profile-image"
        className="w-full"
        src={ imageUrl }
        alt="Profile avatar"
      />
    </span>
  );
}

export default ProfileImg;
