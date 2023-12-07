import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

type SearchBarProps = {
  handleSubmit: (e:React.FormEvent<HTMLFormElement>) => void,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  searchParam: string,
};

function SearchBar({ handleChange, handleSubmit,
  searchParam }:SearchBarProps) {
  const validation = searchParam.length < 2;

  return (
    <form
      className="self-center w-fit flex justify-start text-gray-950
    overflow-hidden rounded-full shadow-lg"
      onSubmit={ handleSubmit }
    >
      <input
        onChange={ handleChange }
        type="text"
        value={ searchParam }
        data-testid="search-artist-input"
        placeholder="Procure um artista ou banda"
        className="h-10 pl-4 outline-none placeholder:text-gray-400"
      />
      <button
        className="h-10 bg-white pr-3 pl-2 border-l border-gray-300"
        aria-label="Pesquise pelo artista, banda ou música digitado"
        data-testid="search-artist-button"
        disabled={ validation }
      >
        <FaMagnifyingGlass />
      </button>
    </form>
  );
}

export default SearchBar;
