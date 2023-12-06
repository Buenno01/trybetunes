import React, { useState } from 'react';
import { SongType } from '../types';
import checkedHeart from '../images/checked_heart.png';
import emptyHeart from '../images/empty_heart.png';

type MusicCardProps = {
  songInfo: SongType,
  collectionImg: string,
};

function MusicCard({ collectionImg, songInfo }: MusicCardProps) {
  const { previewUrl, trackName, trackId } = songInfo;
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div
      className="w-11/12 h-60 flex flex-col justify-center
    items-center bg-gray-100 rounded-xl p-3 text-gray-950"
    >
      <h3>{trackName}</h3>
      <label data-testid={ `checkbox-music-${trackId}` }>
        <img src={ isFavorite ? checkedHeart : emptyHeart } alt="favorite" />

        <input
          onChange={ handleFavorite }
          className="hidden"
          checked={ isFavorite }
          type="checkbox"
        />
      </label>
      <audio className="w-full" data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        <code>audio</code>
        .
      </audio>
    </div>
  );
}

export default MusicCard;
