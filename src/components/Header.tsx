import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

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
    <header data-testid="header-component">
      {
        isLoading
          ? <Loading />
          : (
            <>
              <nav>
                <NavLink data-testid="link-to-search" to="/search">Search</NavLink>
                <NavLink data-testid="link-to-favorites" to="/favorites">
                  Favorites
                </NavLink>
                <NavLink data-testid="link-to-profile" to="/profile">Profile</NavLink>
              </nav>
              <p data-testid="header-user-name">{user}</p>
            </>
          )
      }
    </header>
  );
}

export default Header;
