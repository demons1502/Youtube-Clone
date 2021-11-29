import React, { useState } from 'react';

import { Container } from 'react-bootstrap';

import Home from './pages/HomePage/Home.jsx';
import Header from './components/header/Header.jsx';
import Sidebar from './components/sidebar/Sidebar';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

function App() {
    const [sidebar, toggleSidebar] = useState(false);
    const handleToggleSidebar = () => toggleSidebar((preValue) => !preValue);

    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className='app__container'>
                <Sidebar
                    sidebar={sidebar}
                    handleToggleSidebar={handleToggleSidebar}
                />
                <Container fluid className='app__main'>
                    <Home />
                </Container>
            </div>
        </>
    );
}

export default App;
