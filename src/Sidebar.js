import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{playlists}, dispatch]=useStateValue();

    return (
        <div className="sidebar">
        <img className="sidebar_logo"
src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />

        <SidebarOption option="Home" Icon={HomeIcon} />
        <SidebarOption option="Search" Icon={SearchIcon} />
        <SidebarOption option="Your Library" Icon={LibraryMusicIcon} />
        <br />
        <strong className="sidebar_title">PLAYLISTS </strong>
        <hr />

        {playlists?.items?.map(playlists =>(
            <SidebarOption option={playlists.name} />
        ))}
        
        </div>
    )
}

export default Sidebar;

