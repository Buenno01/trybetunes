import React, { useEffect, useState } from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import { SongType } from '../types';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';

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
    <div>
      <h2 className="text-xl text-center mb-4 font-bold">Your favorite songs</h2>
      <div className="flex flex-col gap-4 items-center">
        {
          favorites.map((song) => (
            <MusicCard key={ song.trackId } songInfo={ song } />
          ))
        }
      </div>
    </div>
  );
}

export default Favorites;
