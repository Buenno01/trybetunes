import { useEffect, useState } from 'react';
import { SongType } from '../types';
import SoundBar from './MusicCard/SoundBar';
import FavoriteBtn from './MusicCard/FavoriteBtn';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

type MusicCardProps = {
  songInfo: SongType,
  collectionImg: string,
};

function MusicCard({ collectionImg, songInfo }: MusicCardProps) {
  const { previewUrl, trackName, trackId } = songInfo;
  const [isFavorite, setIsFavorite] = useState(false);

  function checkIfIsFavorite(favSongs: SongType[], song: SongType): boolean {
    const result = favSongs.find(({ trackId: id }) => id === song.trackId);
    return !!result;
  }

  useEffect(() => {
    async function fetchFavoriteSongs() {
      const favoriteSongs = await getFavoriteSongs();
      setIsFavorite(checkIfIsFavorite(favoriteSongs, songInfo));
    }
    fetchFavoriteSongs();
  }, []);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      addSong(songInfo);
    } else {
      removeSong(songInfo);
    }
  }

  return (
    <div
      className="w-60 h-60 flex flex-col justify-center
    items-center bg-gray-100 rounded-xl p-3 text-gray-950"
    >
      <div className="relative w-52 h-52 overflow-hidden">
        <img
          className="w-52"
          src={ collectionImg }
          alt={ `artwork from the collection of ${trackName}` }
        />
        <FavoriteBtn
          isFavorite={ isFavorite }
          trackId={ trackId }
          handleFavorite={ () => { handleFavorite(); } }
        />

        <SoundBar previewUrl={ previewUrl } />
      </div>
      <h3 className="text-lg w-full whitespace-nowrap overflow-hidden">
        {trackName}
      </h3>
    </div>
  );
}

export default MusicCard;
