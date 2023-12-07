import { Link } from 'react-router-dom';
import { AlbumType } from '../../types';

type AlbumCardProps = {
  infos: AlbumType,
};

function AlbumCard({ infos }:AlbumCardProps) {
  const { collectionId, collectionName, artworkUrl100: imgUrl, artistName } = infos;
  return (
    <Link
      className="w-48 h-60 flex flex-col justify-center
      items-center bg-white shadow-xl rounded-xl p-3"
      to={ `/album/${collectionId}` }
      data-testid={ `link-to-album-${collectionId}` }
    >
      <span className="block w-full">
        <img
          className="w-full"
          src={ imgUrl }
          alt={ `artwork of collection ${collectionName} from ${artistName}` }
        />
      </span>
      <div className="text-gray-950 leading-3 w-full whitespace-nowrap overflow-hidden">
        <h3 className="text-lg">{collectionName}</h3>
        <p className="text-md font-light">{artistName}</p>
      </div>
    </Link>
  );
}

export default AlbumCard;
