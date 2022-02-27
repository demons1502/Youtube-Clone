import React, { useEffect } from 'react';
import './WatchPage.scss';
import { Col, Row } from 'react-bootstrap';
import Comments from '../../components/comments/Comments';
import VideoHorizontal from '../../components/video_horizontal/VideoHorizontal';
import VideoMetaData from '../../components/video_metadata/VideoMetaData';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoById } from '../../redux/actions/videos_action';

const WatchPage = () => {
    const { id } = useParams();
    console.log(id);

    const dispatch = useDispatch();
    const { video, loading } = useSelector((state) => state.selectedVideo);

    useEffect(() => {
        dispatch(getVideoById(id));
    }, [dispatch, id]);

    return (
        <Row>
            <Col lg={7}>
                <div className='watch__play'>
                    <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        frameBorder='0'
                        title={video?.snippet?.title}
                        allowFullScreen
                        width='100%'
                        height='100%'
                    />
                </div>
                {!loading ? (
                    <VideoMetaData video={video} videoId={id} />
                ) : (
                    <h6>Loading</h6>
                )}
                <Comments />
            </Col>
            <Col lg={5}>
                {[...Array(10)].map((item, index) => (
                    <VideoHorizontal key={index} />
                ))}
            </Col>
        </Row>
    );
};

export default WatchPage;
