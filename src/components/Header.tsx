import { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';
import NavBar from './NavBar';

function Header() {
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const username = (await getUser()).name;
      setUser(username);
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  return (
    <header
      className="min-w-full h-28 justify-between flex flex-col bg-gray-950 mb-5 shadow-lg"
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
                <p
                  className="text-gray-400"
                  data-testid="header-user-name"
                >
                  {user}
                </p>
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
