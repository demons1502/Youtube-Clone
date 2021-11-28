import React from 'react';

import './Video.scss';

import { AiFillEye } from 'react-icons/ai';

const Video = () => {
    return (
        <div className='video'>
            <div className='video__top'>
                <img
                    src='http://i3.ytimg.com/vi/aSRasJp1MZU/maxresdefault.jpg'
                    alt='video-thumbnail'
                />
                <span>1:25:51</span>
            </div>
            <div className='video__channel'>
                <img
                    src='https://yt3.ggpht.com/ytc/AKedOLQC1yRg0N1TGkxh_iNNBsKRc5ZpCiIvxTawQ0eVag=s48-c-k-c0x00ffffff-no-rj'
                    alt='channel'
                />
                <p>
                    (Goose Goose Duck) Rủ vợ Trang Mixi vào chơi ngỗng vịt và
                    cái kết ngày hội làm ngỗng bị bẻ cổ.
                </p>
            </div>
            <div className='video__details'>
                <p>Mixi Gaming</p>
                <span>
                    <AiFillEye /> 833,498 views
                </span>
                <span>Nov 23, 2021</span>
            </div>
        </div>
    );
};

export default Video;
