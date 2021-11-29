import React from 'react';
import './Header.scss';

import YoutubeApps from '../youtube_apps/YoutubeApps';
import Notifications from '../notifications/Notifications';

import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications } from 'react-icons/md';

const Header = ({ handleToggleSidebar }) => {
    return (
        <div className='header'>
            <FaBars
                className='header__menu'
                size={26}
                onClick={handleToggleSidebar}
            />
            <img
                src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                alt=''
                className='header__logo'
            />
            <form>
                <input type='text' placeholder='Search' />
                <button type='submit'>
                    <AiOutlineSearch size={22} />
                </button>
            </form>
            <div className='header__icons'>
                <div className='youtube__apps'>
                    <YoutubeApps />
                </div>
                <div className='notifications'>
                    <MdNotifications size={28} />
                    <Notifications />
                </div>
                <img
                    src='https://thumbs.dreamstime.com/b/unknown-businessman-avatar-profile-picture-black-white-illustration-35616527.jpg'
                    alt='avatar'
                />
            </div>
        </div>
    );
};

export default React.memo(Header);
