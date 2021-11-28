import React, { useState } from 'react';
import './CategoriesBar.scss';

const keywords = [
    'All',
    'Trap Nation',
    'Avicii',
    'React Native',
    'EDM',
    'Redux',
    'Music',
    'House Nation',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Martin Garrix',
];

const CategoriesBar = () => {
    const [activeElement, setActiveElement] = useState('All');

    const handleClick = (item) => {
        setActiveElement(item);
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
