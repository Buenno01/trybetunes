import React, { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { AlbumType } from '../types';
import Loading from '../components/Loading';
import AlbumCard from '../components/AlbumCard';

function Search() {
  const [searchParam, setSearchParam] = useState('');
  const [title, setTitle] = useState('');
  const [results, setResults] = useState<AlbumType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setSearchParam(target.value);
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    const fetchApi = await searchAlbumsAPI(searchParam);
    setResults(fetchApi);
    setTitle(searchParam);
    setSearchParam('');
    setIsLoading(false);
  }

  const validation = searchParam.length < 2;

  if (isLoading) return <Loading />;
  return (
    <>
      <form
        className="self-center w-fit flex justify-start text-gray-950"
        onSubmit={ (e) => { handleSubmit(e); } }
      >
        <input
          onChange={ (e) => { handleChange(e); } }
          type="text"
          value={ searchParam }
          data-testid="search-artist-input"
          placeholder="Procure um artista ou banda"
          className="h-10 rounded-bl-full rounded-tl-full pl-4 outline-none
          placeholder:text-gray-400
          "
        />
        <button
          className="h-10 rounded-br-full rounded-tr-full
          bg-white pr-3 pl-2 border-l border-gray-300"
          aria-label="Pesquise pelo artista, banda ou música digitado"
          data-testid="search-artist-button"
          disabled={ validation }
        >
          <FaMagnifyingGlass />
        </button>
      </form>
      <hr className="my-4 border-gray-600" />
      <div
        className="flex flex-col justify-center items-center gap-3"
      >
        {
          results.length === 0
            ? 'Faça sua busca :D'
            : (
              <>
                <p>
                  Resultado de álbuns de:
                  {' '}
                  {title}
                </p>
                {results.map((album) => (
                  <AlbumCard key={ album.collectionId } infos={ album } />
                ))}
              </>
            )
        }
      </div>
    </>
  );
}

export default Search;
