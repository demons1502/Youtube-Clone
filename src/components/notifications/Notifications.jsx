import React from 'react';

import { AiFillSetting } from 'react-icons/ai';
import { fake_notifications } from '../../components/notifications/dummyData';

import './Notifications.scss';
const Notifications = () => {
    return (
        <>
            <div className='notifications__main'>
                <div className='notifications__main__top'>
                    <span>Notifications</span>
                    <AiFillSetting size={25} />
                </div>
                <div className='line'></div>
                {fake_notifications.map((item, index) => (
                    <div key={index} className='notifications__main__item'>
                        <img className='avatar' src={item.proImage} alt='' />
                        <div className='details'>
                            <p className='text'>{item.text}</p>
                            <span className='time'>{item.time}</span>
                        </div>
                        <div className='thumbnail'>
                            <img src={item.thumbnail} alt='' />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Notifications;
