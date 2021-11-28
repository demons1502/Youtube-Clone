import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Video from '../../components/video/Video.jsx';
import CategoriesBar from '../../components/categoriesBar/CategoriesBar.jsx';

const videos = new Array(20);

const Home = () => {
    return (
        <Container>
            <CategoriesBar />
            <Row>
                {[...videos].map((item, index) => (
                    <Col key={index} lg={3} md={4}>
                        <Video />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
