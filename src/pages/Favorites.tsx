import React, { useEffect, useState } from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import { SongType } from '../types';
import MusicCard from '../components/MusicCard';

function Favorites() {
  const [favorites, setFavorites] = useState<SongType[]>([]);
  useEffect(() => {
    async function fetchFavSongs() {
      const favSongs = await getFavoriteSongs();
      if (favSongs) {
        setFavorites(favSongs);
      }
    }
    fetchFavSongs();
  }, []);
  return (
    <div>
      <h2 className="text-xl text-center mb-4">Your favorite songs</h2>
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
