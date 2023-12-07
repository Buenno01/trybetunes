import { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';
import NavBar from './Header/NavBar';
import UserInfo from './Header/UserInfo';
import { UserType } from '../types';

type HeaderProps = {
  changedUser: boolean,
};

function Header({ changedUser }: HeaderProps) {
  const [user, setUser] = useState<UserType>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const userInfo = await getUser();
      setUser(userInfo);
      setIsLoading(false);
    };
    fetchUser();
  }, [changedUser]);

  return (
    <header
      className="min-w-full h-28 justify-between flex flex-col
      bg-gray-950 mb-5 shadow-lg text-white"
      data-testid="header-component"
    >
      {
        isLoading
          ? (
            <p className="self-center my-auto text-sky-400 font-semibold">
              Carregando...
            </p>
          ) : (
            <>
              <div className="flex justify-between items-center px-2 py-3">
                <h1 className="text-sky-400 text-2xl font-medium">TrybeTunes</h1>
                <UserInfo userName={ user?.name } userImage={ user?.image } />
              </div>
              <div>
                <hr className="border-gray-700" />
                <NavBar />
              </div>
            </>
          )
      }
    </header>
  );
}

export default Header;
