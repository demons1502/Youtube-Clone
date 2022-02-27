import React from 'react';
import './VideoHorizontal.scss';

import { AiFillEye } from 'react-icons/ai';

import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col, Row } from 'react-bootstrap';

const VideoHorizontal = () => {
    const seconds = moment.duration('100').asSeconds();
    const _duration = moment.utc(seconds * 1000).format('mm:ss');
    return (
        <Row className='videoHorizontal m-1 py-2 align-items-center'>
            <Col xs={6} md={6} className='videoHorizontal__left'>
                <LazyLoadImage
                    src='https://thumbs.dreamstime.com/b/unknown-businessman-avatar-profile-picture-black-white-illustration-35616527.jpg'
                    effect='blur'
                    className='videoHorizontal__thumbnail'
                    wrapperClassName='videoHorizontal__thumbnail-wrapper'
                />
                <span className='videoHorizontal__duration'>{_duration}</span>
            </Col>
            <Col xs={6} md={6} className='videoHorizontal__right p-0'>
                <p className='videoHorizontal__title mb-1'>
                    Can I Create Accessible CSS Toggle Buttons?
                </p>
                <div className='videoHorizontal__details'>
                    <AiFillEye /> {numeral(100000).format('0.a')} Views ·&nbsp;
                    {moment('2022-02-20').fromNow()}
                </div>
                <div className='videoHorizontal__channel d-flex align-items-center my-1'>
                    {/* <LazyLoadImage
                        src='https://thumbs.dreamstime.com/b/unknown-businessman-avatar-profile-picture-black-white-illustration-35616527.jpg'
                        effect='blur'
                        className='videoHorizontal__thumbnail'
                        wrapperClassName='videoHorizontal__thumbnail-wrapper'
                    /> */}
                    <p className='mb-0'>Mixi Gaming</p>
                </div>
            </Col>
        </Row>
    );
};

export default VideoHorizontal;
