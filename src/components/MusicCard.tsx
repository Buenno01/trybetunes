import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SongType } from '../types';
import SoundBar from './MusicCard/SoundBar';
import FavoriteBtn from './MusicCard/FavoriteBtn';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import MusicalNote from '../images/note.svg';

type MusicCardProps = {
  songInfo: SongType,
  collectionImg?: string,
};

function MusicCard({ collectionImg = MusicalNote, songInfo }: MusicCardProps) {
  const { previewUrl, trackName, trackId } = songInfo;
  const [isFavorite, setIsFavorite] = useState(false);
  const location = useLocation();

  function checkIfIsFavorite(favSongs: SongType[], song: SongType): boolean {
    return !!favSongs.find(({ trackId: id }) => id === song.trackId);
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

  if (location.pathname === '/favorites' && !isFavorite) return;

  return (
    <div
      className="w-60 h-60 flex flex-col justify-center
    items-center bg-white shadow-xl rounded-xl p-3 text-gray-950"
    >
      <div className="relative w-52 h-52 overflow-hidden">
        {
          collectionImg === MusicalNote
            ? (
              <span
                className="w-52 flex justify-center h-full
              bg-gradient-to-tr from-gray-950 to-gray-400"
              >
                <img
                  className="w-32"
                  src={ collectionImg }
                  alt={ `artwork from the collection of ${trackName}` }
                />
              </span>
            )
            : (
              <img
                className="w-52"
                src={ collectionImg }
                alt={ `artwork from the collection of ${trackName}` }
              />
            )
        }
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
