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
              <div className="text-center pb-4">
                <h2
                  className="text-2xl font-bold"
                  data-testid="album-name"
                >
                  {album.collectionName}

                </h2>
                <p
                  className="text-gray-400"
                  data-testid="artist-name"
                >
                  {album.artistName}

                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
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
