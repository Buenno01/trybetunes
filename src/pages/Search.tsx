import React, { useState } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { AlbumType } from '../types';
import Loading from '../components/Loading';
import AlbumCard from '../components/Search/AlbumCard';
import SearchBar from '../components/Search/SearchBar';
import Wrapper from '../components/Wrapper';

function Search() {
  const [searchParam, setSearchParam] = useState('');
  const [title, setTitle] = useState('');
  const [results, setResults] = useState<AlbumType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [wasSearched, setWasSearched] = useState(false);
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
    setWasSearched(true);
  }

  if (isLoading) return <Loading />;
  return (
    <>
      <SearchBar
        handleSubmit={ (e) => handleSubmit(e) }
        searchParam={ searchParam }
        handleChange={ (e) => { handleChange(e); } }
      />
      <hr className="my-4 border-gray-300" />
      <div
        className="flex flex-col justify-center items-center gap-3"
      >
        {!wasSearched && 'Faça sua perquisa :D'}
        { wasSearched
          && (results.length === 0
            ? 'Nenhum álbum foi encontrado'
            : (
              <>
                <p>
                  Resultado de álbuns de:
                  {' '}
                  {title}
                </p>
                <Wrapper>
                  {results.map((album) => (
                    <AlbumCard key={ album.collectionId } infos={ album } />
                  ))}
                </Wrapper>
              </>
            ))}
      </div>
    </>
  );
}

export default Search;
