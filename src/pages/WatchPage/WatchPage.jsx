import React from 'react';
import './WatchPage.scss';
import { Col, Row } from 'react-bootstrap';
import Comments from '../../components/comments/Comments';
import VideoHorizontal from '../../components/video_horizontal/VideoHorizontal';
import VideoMetaData from '../../components/video_metadata/VideoMetaData';

const WatchPage = () => {
    return (
        <Row>
            <Col lg={8}>
                <div className='watch__play'>
                    <iframe
                        src='https://www.youtube.com/embed/2PTlzUtoFU'
                        frameBorder='0'
                        title='MY_VIDEO'
                        allowFullScreen
                        width='100%'
                        height='100%'
                    />
                </div>
                <VideoMetaData />
                <Comments />
            </Col>
            <Col lg={4}>
                {[...Array(10)].map((item, index) => (
                    <VideoHorizontal key={index} />
                ))}
            </Col>
        </Row>
    );
};

export default WatchPage;
