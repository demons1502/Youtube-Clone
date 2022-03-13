import React, { useEffect } from 'react';
import './WatchPage.scss';
import { Col, Row } from 'react-bootstrap';
import Comments from '../../components/comments/Comments';
import VideoHorizontal from '../../components/video_horizontal/VideoHorizontal';
import VideoMetaData from '../../components/video_metadata/VideoMetaData';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    getRelatedVideos,
    getVideoById,
} from '../../redux/actions/videos_action';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const WatchPage = () => {
    const { id } = useParams();
    console.log(id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideoById(id));
        dispatch(getRelatedVideos(id));
    }, [dispatch, id]);

    const { video, loading } = useSelector((state) => state.selectedVideo);

    const { videos, loading: relatedVideoLoading } = useSelector(
        (state) => state.relatedVideo
    );

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
                <Comments
                    videoId={id}
                    totalComment={video?.statistics?.commentCount}
                />
            </Col>
            <Col lg={5}>
                {!relatedVideoLoading ? (
                    videos
                        ?.filter((video) => video.snippet)
                        .map((video) => (
                            <VideoHorizontal
                                video={video}
                                key={video.id.videoId}
                            />
                        ))
                ) : (
                    <SkeletonTheme>
                        <Skeleton width='100%' height='130' count={15} />
                    </SkeletonTheme>
                )}
            </Col>
        </Row>
    );
};

export default WatchPage;
