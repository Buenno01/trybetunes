import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../services/userAPI';

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
  const linkClasses = `w-full flex justify-center
  border-b border-gray-600 py-3`;
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
                <nav className="flex justify-between">
                  <NavLink
                    className={ linkClasses }
                    data-testid="link-to-search"
                    to="/search"
                  >
                    Pesquisar

                  </NavLink>
                  <NavLink
                    className={ linkClasses }
                    data-testid="link-to-favorites"
                    to="/favorites"
                  >
                    Favoritos
                  </NavLink>
                  <NavLink
                    className={ linkClasses }
                    data-testid="link-to-profile"
                    to="/profile"
                  >
                    Perfil

                  </NavLink>
                </nav>
              </div>
            </>
          )
      }
    </header>
  );
}

export default Header;
