import React from 'react';
import './Comments.scss';
import Comment from '../../components/comment/Comment';

const Comments = () => {
    const handleSubmit = () => {};

    return (
        <div className='comments'>
            <p>4444 Comments</p>
            <div className='comments__form d-flex w-100 my-2'>
                {/* <img
                    src='https://thumbs.dreamstime.com/b/unknown-businessman-avatar-profile-picture-black-white-illustration-35616527.jpg'
                    alt=''
                    className='rounded-circle mr-3'
                /> */}
                <form onSubmit={handleSubmit} className='d-flex flex-grow-1'>
                    <input
                        type='text'
                        className='flex-grow-1'
                        placeholder='Write your Comment'
                    />
                    <button className='border-0 p-2'>Comment</button>
                </form>
            </div>
            <div className='comments__list'>
                {[...Array(15)].map((item, index) => (
                    <Comment key={index} />
                ))}
            </div>
        </div>
    );
};

export default Comments;
