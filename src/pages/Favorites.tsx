import React, { useEffect, useState } from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import { SongType } from '../types';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';
import Wrapper from '../components/Wrapper';
import Headline from '../components/Headline';

function Favorites() {
  const [favorites, setFavorites] = useState<SongType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchFavSongs() {
      const favSongs = await getFavoriteSongs();
      if (favSongs) {
        setFavorites(favSongs);
      }
      setIsLoading(false);
    }
    fetchFavSongs();
  }, []);
  if (isLoading) return <Loading />;
  return (
    <>
      <Headline headline="Your favorite songs" />
      <Wrapper>
        {
          favorites.map((song) => (
            <MusicCard key={ song.trackId } songInfo={ song } />
          ))
          }
      </Wrapper>
    </>
  );
}

export default Favorites;
