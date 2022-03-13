import React, { useEffect, useState } from 'react';
import './Comments.scss';
import Comment from '../../components/comment/Comment';
import { useDispatch, useSelector } from 'react-redux';
import {
    addComment,
    getCommentsOfVideoById,
} from '../../redux/actions/comments_actions';

const Comments = ({ videoId, totalComment }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCommentsOfVideoById(videoId));
    }, [dispatch, videoId]);

    const comments = useSelector((state) => state.commentList.comments);

    const _comments = comments?.map(
        (comment) => comment.snippet.topLevelComment.snippet
    );

    const [text, setText] = useState('');

    const handleComment = (e) => {
        e.preventDefault();
        if (text.length === 0) return;
        dispatch(addComment(videoId, text));
        setText('');
    };

    return (
        <div className='comments'>
            <p>{totalComment} Comments</p>
            <div className='comments__form d-flex w-100 my-2'>
                {/* <img
                    src='https://thumbs.dreamstime.com/b/unknown-businessman-avatar-profile-picture-black-white-illustration-35616527.jpg'
                    alt=''
                    className='rounded-circle mr-3'
                /> */}
                <form onSubmit={handleComment} className='d-flex flex-grow-1'>
                    <input
                        type='text'
                        className='flex-grow-1'
                        placeholder='Write your Comment'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button className='border-0 p-2'>Comment</button>
                </form>
            </div>
            <div className='comments__list'>
                {_comments?.map((item, index) => (
                    <Comment comment={item} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Comments;
