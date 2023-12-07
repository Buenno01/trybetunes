import { useEffect, useState } from 'react';
import { GoPencil } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { UserType } from '../types';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';
import ProfileItems from '../components/Profile/ProfileItems';
import ProfileImg from '../components/Profile/ProfileImg';

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
    <div className="w-10/12 md:w-6/12 lg:w-4/12 self-center">
      <span className="flex justify-between items-center">
        <ProfileImg size="28" imageUrl={ user.image } />
        <Link
          to="/profile/edit"
          className="text-md p-2 border border-sky-500 h-fit w-fit
        rounded-lg flex items-center gap-2 text-sky-500"
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
