import React from 'react';
import './Comment.scss';
import moment from 'moment';

const Comment = () => {
    return (
        <div className='comment p-2 d-flex'>
            <img
                src='https://thumbs.dreamstime.com/b/unknown-businessman-avatar-profile-picture-black-white-illustration-35616527.jpg'
                alt=''
                className='rounded-circle mr-3'
            />
            <div className='comment__body'>
                <p className='comment__header mb-0'>
                    Submit Day · {moment('2022-02-20').fromNow()}
                </p>
                <p>Good!!!!</p>
            </div>
        </div>
    );
};

export default Comment;
