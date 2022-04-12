import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    getVideosByCategory,
    getPopularVideos,
} from '../../redux/actions/videos_action';
import './CategoriesBar.scss';

const keywords = [
    'ALL',
    'Trap Nation',
    'Avicii',
    'React Native',
    'EDM',
    'Redux',
    'Music',
    'House Nation',
    'Guitar',
    'English Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Martin Garrix',
];

const CategoriesBar = () => {
    const [activeElement, setActiveElement] = useState('ALL');

    const dispatch = useDispatch();

    const handleClick = (item) => {
        setActiveElement(item);
        if (item === 'ALL') {
            dispatch(getPopularVideos(item));
        } else {
            dispatch(getVideosByCategory(item));
        }
    };

    return (
        <div className='categoriesBar'>
            {keywords.map((item, index) => (
                <span
                    onClick={() => handleClick(item)}
                    key={index}
                    className={activeElement === item ? 'active' : ''}
                >
                    {item}
                </span>
            ))}
        </div>
    );
};

export default CategoriesBar;
