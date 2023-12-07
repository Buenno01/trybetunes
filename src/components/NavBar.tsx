import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { IoPersonCircleOutline, IoPersonCircleSharp } from 'react-icons/io5';
import { PiMagnifyingGlassFill, PiMagnifyingGlassLight } from 'react-icons/pi';

function NavBar() {
  const linkClasses = `w-full flex justify-center
  border-b border-gray-600 py-3 peer`;
  return (
    <nav className="flex justify-between">
      <NavLink
        className={ linkClasses }
        data-testid="link-to-search"
        to="/search"
        aria-label="Página de busca"
      >
        <div className="group text-2xl">
          <span className="starts-visible">
            <PiMagnifyingGlassLight />
          </span>
          <span className="starts-hidden">
            <PiMagnifyingGlassFill />
          </span>
        </div>
        <p className="hidden sm:inline">
          Buscar
        </p>

      </NavLink>
      <NavLink
        className={ linkClasses }
        data-testid="link-to-favorites"
        to="/favorites"
        aria-label="Página de favoritos"
      >
        <div className="group text-2xl">
          <span className="starts-visible">
            <FaRegHeart />
          </span>
          <span className="starts-hidden">
            <FaHeart />
          </span>
        </div>
        <p className="hidden sm:inline">
          Favoritos
        </p>
      </NavLink>
      <NavLink
        className={ linkClasses }
        data-testid="link-to-profile"
        to="/profile"
        aria-label="Página de perfil"
      >
        <div className="group text-2xl">
          <span className="starts-visible">
            <IoPersonCircleOutline />
          </span>
          <span className="starts-hidden">
            <IoPersonCircleSharp />
          </span>
        </div>
        <p className="hidden sm:inline">
          Perfil
        </p>

      </NavLink>
    </nav>
  );
}

export default NavBar;
