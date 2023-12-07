import { useEffect, useState } from 'react';
import { GoPencil } from 'react-icons/go';
import { Link } from 'react-router-dom';
import MusicalNote from '../images/musical_note.svg';
import { UserType } from '../types';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';
import ProfileItems from '../components/ProfileItems';

function Profile() {
  const [user, setUser] = useState<UserType>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();
      setUser(userData);
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  const genericMessage = 'Oops! Parece que não tem nada aqui.';
  const items = [
    {
      headline: 'Nome',
      information: user?.name
        ? user.name : genericMessage,
    },
    {
      headline: 'E-mail',
      information: user?.email
        ? user.email : genericMessage,
    },
    {
      headline: 'Descrição',
      information: user?.description
        ? user.description : genericMessage,
    },
  ];
  if (isLoading || !user) return <Loading />;
  return (
    <div className="w-10/12 self-center">
      <span className="flex justify-between text-white items-center">
        <span className="w-28 h-28 p-5 rounded-full overflow-hidden bg-white">
          <img
            data-testid="profile-image"
            className="w-full"
            src={ user?.image ? user?.image : MusicalNote }
            alt="Profile avatar"
          />
        </span>
        <Link
          to="/profile/edit"
          className="text-md p-2 border h-fit w-fit
        rounded-lg flex items-center gap-2"
          aria-label="Editar perfil"
        >
          Editar perfil
          <span className="text-xl">
            <GoPencil />
          </span>
        </Link>
      </span>
      <div className="flex flex-col gap-2 mt-4">
        {
          items.map((item) => <ProfileItems key={ item.headline } { ... item } />)
        }
      </div>
    </div>
  );
}

export default Profile;
