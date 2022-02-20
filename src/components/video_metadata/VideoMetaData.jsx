import moment from 'moment';
import numeral from 'numeral';
import React from 'react';
import './VideoMetaData.scss';

import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import ShowMoreText from 'react-show-more-text';

const VideoMetaData = () => {
    return (
        <div className='videoMetaData py-2'>
            <div className='videoMetaData__top'>
                <h5>Video Title</h5>
                <div className='d-flex justify-content-between align-item-center py-1'>
                    <span>
                        {numeral(10000).format('0.a')} Views ·&nbsp;
                        {moment('2022-02-20').fromNow()}
                    </span>
                    <div>
                        <span className='mr-1'>
                            <MdThumbUp size={26} />
                            &nbsp;
                            {numeral(10000).format('0.a')}
                        </span>
                        <span className='mr-1'>
                            <MdThumbDown size={26} />
                            &nbsp;
                            {numeral(10000).format('0.a')}
                        </span>
                    </div>
                </div>
            </div>
            <div className='videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3'>
                <div className='d-flex'>
                    <img
                        src='https://thumbs.dreamstime.com/b/unknown-businessman-avatar-profile-picture-black-white-illustration-35616527.jpg'
                        alt=''
                        className='rounded-circle mr-3'
                    />
                    <div className='d-flex flex-column'>
                        <span className='text-light'>Ngoc Hau</span>
                        <span>{numeral(10000).format('0.a')} Subscribers</span>
                    </div>
                </div>
                <button className='btn border-0 p-2 m-2'>SUBSCRIBE</button>
            </div>
            <div className='videoMetaData__description'>
                <ShowMoreText
                    lines={3}
                    more='SHOW MORE'
                    less='SHOW LESS'
                    anchorClass='showMoreText'
                    expanded={false}
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Delectus est eligendi eos, ut earum autem sunt similique,
                    repellat deleniti assumenda voluptatem rerum, possimus nulla
                    vel tempore tenetur. Perspiciatis, sunt fuga. A natus fugiat
                    itaque dolore ex rem sit nulla consectetur! Ullam minus
                    fugiat ipsa laudantium consequuntur quam, nisi magnam quasi
                    rerum sequi? Autem doloremque dolorem nam hic fuga debitis
                    impedit!
                </ShowMoreText>
            </div>
        </div>
    );
};

export default VideoMetaData;
