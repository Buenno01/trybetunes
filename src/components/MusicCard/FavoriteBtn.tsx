import React from 'react';
import checkedHeart from '../../images/checked_heart.png';
import emptyHeart from '../../images/empty_heart.png';

type FavoriteBtnProps = {
  trackId: number,
  isFavorite: boolean,
  handleFavorite: ()=>void,
};

function FavoriteBtn({ handleFavorite, isFavorite, trackId }: FavoriteBtnProps) {
  return (
    <label
      className="absolute top-1 left-1 bg-slate-100 w-8 h-8
      flex justify-center items-center rounded-full bg-opacity-50"
      data-testid={ `checkbox-music-${trackId}` }
    >
      <img
        src={ isFavorite ? checkedHeart : emptyHeart }
        alt="favorite"
      />
      <input
        onChange={ handleFavorite }
        className="hidden"
        checked={ isFavorite }
        type="checkbox"
      />
    </label>
  );
}

export default FavoriteBtn;
