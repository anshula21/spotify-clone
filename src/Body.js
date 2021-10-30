import React ,{ useState, useEffect } from 'react';
import './Body.css';
import Header from './Header';
import {useStateValue} from './StateProvider';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';


import song from './music/Baby.mp3';


export const useAudio = song => {
  const [audio] = useState(new Audio(song));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};


function Body({spotify}) {

  const [playing, toggle] = useAudio(song);

    
    const [{discover_weekly},dispatch]= useStateValue();

  
    // const playPlaylist = (id) => {
    //   spotify
    //     .play({
    //       context_uri: `spotify:playlist:37i9dQZEVXcUsbZKfSivjc`,
    //     })
    //     .then((res) => {
    //       spotify.getMyCurrentPlayingTrack().then((r) => {
    //         dispatch({
    //           type: "SET_ITEM",
    //           item: r.item,
    //         });
    //         dispatch({
    //           type: "SET_PLAYING",
    //           playing: true,
    //         });
    //       });
    //     });
    // };
  
    const playSong = (id) => {
      spotify
        .play({
          uris: [`spotify:track:${id}`],
        })
        .then((res) => {
          spotify.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
              type: "SET_ITEM",
              item: r.item,
            });
            dispatch({
              type: "SET_PLAYING",
              playing: true,
            });
          });
        });
    };


    return (
        <div className="body">
      <Header spotify={spotify} />

      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle" onClick={toggle} />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} playSong={playSong} />
        ))}
      </div>
    </div>
  );
}

export default Body;


