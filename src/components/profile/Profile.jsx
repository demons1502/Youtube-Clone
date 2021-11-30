import React, { useState } from 'react';

import './Profile.scss';

import { ImProfile } from 'react-icons/im';
import {
    AiOutlineDollarCircle,
    AiOutlineSetting,
    AiOutlineExport,
    AiOutlineGlobal,
    AiOutlineFileProtect,
} from 'react-icons/ai';
import { MdOutlineSwitchAccount, MdOutlineFeedback } from 'react-icons/md';
import { BsMoon, BsKeyboard } from 'react-icons/bs';
import { IoLanguageOutline } from 'react-icons/io5';
import { FiHelpCircle } from 'react-icons/fi';

const Profile = () => {
    const [profile, setShowProfile] = useState(false);

    const showProfile = () => {
        setShowProfile((preValue) => !preValue);
    };

    return (
        <>
            <img
                src='https://thumbs.dreamstime.com/b/unknown-businessman-avatar-profile-picture-black-white-illustration-35616527.jpg'
                alt='avatar'
                onClick={showProfile}
            />
            <div className={profile ? 'profile__drop active' : 'profile__drop'}>
                <div className='profile__drop__top'>
                    <img
                        src='https://thumbs.dreamstime.com/b/unknown-businessman-avatar-profile-picture-black-white-illustration-35616527.jpg'
                        alt=''
                    />
                    <div className='details'>
                        <div className='info'>
                            <span>Nguyen Ngoc Hau</span>
                            <p>nnhau.20it2@vku.udn.vn</p>
                        </div>
                        <a href='youtube.com'>Manager your account</a>
                    </div>
                </div>
                <div className='line'></div>
                <div className='profile__drop__bot'>
                    <div className='bot__item'>
                        <ImProfile />
                        <span>Create a channel</span>
                    </div>
                    <div className='bot__item'>
                        <AiOutlineDollarCircle />
                        <span>Purchases and membership</span>
                    </div>
                    <div className='bot__item'>
                        <AiOutlineSetting />
                        <span>Youtube Studio</span>
                    </div>
                    <div className='bot__item'>
                        <MdOutlineSwitchAccount />
                        <span>Switch Account</span>
                    </div>
                    <div className='bot__item'>
                        <AiOutlineExport />
                        <span>Sign out</span>
                    </div>
                    <div className='bot__item'>
                        <BsMoon />
                        <span>Appearance: Device theme</span>
                    </div>
                    <div className='bot__item'>
                        <IoLanguageOutline />
                        <span>Language: English</span>
                    </div>
                    <div className='bot__item'>
                        <AiOutlineGlobal />
                        <span>Location: VietNam</span>
                    </div>
                    <div className='bot__item'>
                        <AiOutlineSetting />
                        <span>Settings</span>
                    </div>
                    <div className='bot__item'>
                        <AiOutlineFileProtect />
                        <span>Your data in Youtube</span>
                    </div>
                    <div className='bot__item'>
                        <FiHelpCircle />
                        <span>Help</span>
                    </div>
                    <div className='bot__item'>
                        <MdOutlineFeedback />
                        <span>Send feedback</span>
                    </div>
                    <div className='bot__item'>
                        <BsKeyboard />
                        <span>Keyboard shortcuts</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
