import React from 'react';
import { Link } from 'react-router-dom';
import { AlbumType } from '../types';

type AlbumCardProps = {
  infos: AlbumType,
};

function AlbumCard({ infos }:AlbumCardProps) {
  const { artistId, artistName, artworkUrl100, collectionId,
    collectionName, collectionPrice, releaseDate, trackCount } = infos;
  return (
    <Link to={ `/album/${collectionId}` } data-testid={ `link-to-album-${collectionId}` }>
      <h3>{collectionName}</h3>
    </Link>
  );
}

export default AlbumCard;
