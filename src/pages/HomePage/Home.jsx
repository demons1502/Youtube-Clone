import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Video from '../../components/video/Video.jsx';
import CategoriesBar from '../../components/categoriesBar/CategoriesBar.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos } from '../../redux/actions/videos_action';
const Home = () => {
    // console.log('Re-render');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularVideos());
    }, [dispatch]);

    const { videos } = useSelector((state) => state.homeVideos);

    return (
        <Container>
            <CategoriesBar />
            <Row>
                {videos.map((video, index) => (
                    <Col key={index} lg={3} md={4}>
                        <Video video={video} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
