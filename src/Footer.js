import React,{useState,useEffect} from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import { Grid, Slider } from "@material-ui/core";
import song from './music/Baby.mp3';
import {useAudio} from './Body';

function Footer() {
    const [playing, toggle] = useAudio(song);

    const playy=()=>{if(playing) {
        return <PauseCircleFilledIcon className="footer_icon" onClick={toggle} />
    }else
       return <PlayCircleOutlineIcon className="footer_icon" onClick={toggle} />}


    return (
        <div className="footer">
            <div className="footer_left">
                <img  src="https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
                 alt="" className="footer_albumLogo" />
                <div className="footer_songInfo">
                    <h4>No song is playing</h4>
                    <p>...</p>
                </div>
            </div>

            <div className="footer_center">
                 <ShuffleIcon className="footer_green" />
                 <SkipPreviousIcon className="footer_icon"/>
                 {playing?(<PauseCircleFilledIcon className="footer_icon" onclick={playy} />)
                 :(<PlayCircleOutlineIcon fontSize="large" className="footer_icon" onClick={toggle} />)}
                 {/* <PlayCircleOutlineIcon fontSize="large" className="footer_icon" onClick={toggle} /> */}
                 <SkipNextIcon className="footer_icon" />
                 <RepeatIcon className="footer_green" />
            </div>

            <div className="footer_right">
                 <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer

