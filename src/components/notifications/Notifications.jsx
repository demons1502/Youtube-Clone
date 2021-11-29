import React from 'react';

import { AiFillSetting } from 'react-icons/ai';

import './Notifications.scss';
const Notifications = ({ proImage, text, time, thumbnail }) => {
    return (
        <>
            <div className='notifications__main'>
                <div className='notifications__main__top'>
                    <span>Notifications</span>
                    <AiFillSetting size={25} />
                </div>
                <div className='line'></div>
                <div className='notifications__main__item'>
                    <img className='avatar' src={proImage} alt='' />
                    <div className='details'>
                        <p className='text'>{text}</p>
                        <span className='time'>{time}</span>
                    </div>
                    <div className='thumbnail'>
                        <img src={thumbnail} alt='' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notifications;
