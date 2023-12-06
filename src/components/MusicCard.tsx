import React, { useState } from 'react';
import { SongType } from '../types';
import checkedHeart from '../images/checked_heart.png';
import emptyHeart from '../images/empty_heart.png';

function MusicCard({ previewUrl, trackName, trackId }: SongType) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div>
      <h3>{trackName}</h3>
      <label data-testid={ `checkbox-music-${trackId}` }>
        <img src={ isFavorite ? checkedHeart : emptyHeart } alt="favorite" />

        <input
          onChange={ handleFavorite }
          style={ { display: 'none' } }
          checked={ isFavorite }
          type="checkbox"
        />
      </label>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        <code>audio</code>
        .
      </audio>
    </div>
  );
}

export default MusicCard;
