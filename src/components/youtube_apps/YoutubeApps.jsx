import React, { useState } from 'react';
import { ReactComponent as YoutubeTv } from '../../assets/icons/YoutubeTv.svg';
import { ReactComponent as YoutubeKids } from '../../assets/icons/YoutubeKids.svg';
import { ReactComponent as YoutubeMusic } from '../../assets/icons/YoutubeMusic.svg';
import { ReactComponent as YoutubeNormal } from '../../assets/icons/YoutubeNormal.svg';

import { MdApps } from 'react-icons/md';

import './YoutubeApps.scss';

const YoutubeApps = () => {
    const [youtube_apps, setActiveYoutubeApps] = useState(false);

    const showYoutubeApps = () => {
        setActiveYoutubeApps((preValue) => !preValue);
    };

    return (
        <>
            <MdApps onClick={showYoutubeApps} size={28} />
            <div className={youtube_apps ? 'apps active' : 'apps'}>
                <div className='apps__item'>
                    <YoutubeTv />
                    <span>YouTuBe TV</span>
                </div>
                <div className='line' />
                <div className='apps__item'>
                    <YoutubeMusic />
                    <span>YouTuBe Music</span>
                </div>
                <div className='apps__item'>
                    <YoutubeKids />
                    <span>YouTuBe Kids</span>
                </div>
                <div className='line' />
                <div className='apps__item'>
                    <YoutubeNormal />
                    <span>Creator Academy</span>
                </div>
                <div className='apps__item'>
                    <YoutubeNormal />
                    <span>YouTuBe for Artists</span>
                </div>
            </div>
        </>
    );
};

export default YoutubeApps;
