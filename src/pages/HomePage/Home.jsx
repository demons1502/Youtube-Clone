import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Video from '../../components/video/Video.jsx';
import CategoriesBar from '../../components/categoriesBar/CategoriesBar.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
    getPopularVideos,
    getVideosByCategory,
} from '../../redux/actions/videos_action';

import InfiniteScroll from 'react-infinite-scroll-component';
import SkeletonVideo from '../../components/skeletons/SkeletonVideo';

const Home = () => {
    const skeleton = new Array(20);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularVideos());
    }, [dispatch]);

    const { videos, activeCategory, loading } = useSelector(
        (state) => state.homeVideos
    );

    console.log(loading);

    const fetchData = () => {
        if (activeCategory === 'ALL') {
            dispatch(getPopularVideos());
        } else {
            dispatch(getVideosByCategory(activeCategory));
        }
    };

    return (
        <Container>
            <CategoriesBar />
            <InfiniteScroll
                dataLength={videos.length}
                next={fetchData}
                hasMore={true}
                loader={
                    <div className='spinner-border text-danger d-block mx-auto'></div>
                }
                style={{ overflowY: 'hidden' }}
                className='row'
            >
                {!loading
                    ? videos.map((item) => (
                          <Col key={item.id} lg={3} md={4}>
                              <Video video={item} />
                          </Col>
                      ))
                    : [...skeleton].map(() => (
                          <Col lg={3} md={4}>
                              <SkeletonVideo />
                          </Col>
                      ))}
            </InfiniteScroll>
        </Container>
    );
};

export default Home;
