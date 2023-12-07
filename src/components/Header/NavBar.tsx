import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { IoPersonCircleOutline, IoPersonCircleSharp } from 'react-icons/io5';
import { PiMagnifyingGlassFill, PiMagnifyingGlassLight } from 'react-icons/pi';
import LinkWithIcon from './LinkWithIcon';

function NavBar() {
  return (
    <nav className="flex justify-between">
      <LinkWithIcon
        activeIcon={ <PiMagnifyingGlassFill /> }
        nonactiveIcon={ <PiMagnifyingGlassLight /> }
        path="/search"
        text="Buscar"
      />
      <LinkWithIcon
        activeIcon={ <FaHeart /> }
        nonactiveIcon={ <FaRegHeart /> }
        path="/favorites"
        text="Favoritos"
      />
      <LinkWithIcon
        activeIcon={ <IoPersonCircleSharp /> }
        nonactiveIcon={ <IoPersonCircleOutline /> }
        path="/profile"
        text="Perfil"
      />
    </nav>
  );
}

export default NavBar;
