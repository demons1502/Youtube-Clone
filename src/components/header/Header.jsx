import React, { useState } from 'react';
import './Header.scss';

import YoutubeApps from '../youtube_apps/YoutubeApps';
import Notifications from '../notifications/Notifications';
import Profile from '../profile/Profile';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = ({ handleToggleSidebar }) => {
    const [input, setInput] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${input}`);
    };

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
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Search'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit'>
                    <AiOutlineSearch size={22} />
                </button>
            </form>
            <div className='header__icons'>
                <div className='youtube__apps'>
                    <YoutubeApps />
                </div>
                <div className='notifications'>
                    <Notifications />
                </div>
                <div className='profile'>
                    <Profile />
                </div>
            </div>
        </div>
    );
};

export default React.memo(Header);
