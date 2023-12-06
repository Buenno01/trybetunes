import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumType, SongType } from '../types';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';

function Album() {
  const [musics, setMusics] = useState<SongType[]>([]);
  const [album, setAlbum] = useState<AlbumType | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  function isSong(obj: AlbumType | SongType): obj is SongType {
    return (obj as SongType).trackName !== undefined;
  }

  useEffect(() => {
    async function fetchApi() {
      if (id) {
        const data = await getMusics(id);
        setAlbum(data[0]);
        const music: SongType[] = data.filter(isSong);
        setMusics(music);
      }
      setIsLoading(false);
    }
    fetchApi();
  }, []);

  return (
    <div>
      {
        isLoading || !album
          ? <Loading />
          : (
            <>
              <h2 data-testid="artist-name">{album.artistName}</h2>
              <h2 data-testid="album-name">{album.collectionName}</h2>
              <div>
                {
                  musics.length === 0
                    ? 'Suas músicas não foram encontradas.'
                    : (
                      musics.map((song) => (
                        <MusicCard
                          key={ song.trackId }
                          songInfo={ song }
                          collectionImg={ album.artworkUrl100 }
                        />
                      ))
                    )
                }
              </div>
            </>

          )
      }
    </div>
  );
}

export default Album;
