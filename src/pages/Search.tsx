import React, { useState } from 'react';
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

  return (
    <div>
      {
        isLoading
          ? <Loading />
          : (
            <>
              <form onSubmit={ (e) => { handleSubmit(e); } }>
                <input
                  onChange={ (e) => { handleChange(e); } }
                  type="text"
                  value={ searchParam }
                  data-testid="search-artist-input"
                />
                <button
                  aria-label="Pesquise pelo artista, banda ou música digitado"
                  data-testid="search-artist-button"
                  disabled={ validation }
                >
                  Pesquisar
                </button>
              </form>
              <div>
                {
                results.length === 0
                  ? 'Nenhum álbum foi encontrado'
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
          )
      }
    </div>
  );
}

export default Search;
