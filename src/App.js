import React, { useState } from 'react';

import { Container } from 'react-bootstrap';

import Home from './pages/HomePage/Home.jsx';
import Header from './components/header/Header.jsx';
import Sidebar from './components/sidebar/Sidebar';
import Login from './pages/LoginPage/Login.jsx';

import { Route, Routes, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import WatchPage from './pages/WatchPage/WatchPage.jsx';
import SearchScreen from './pages/SearchPage.jsx';

const Layout = ({ children }) => {
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
                    {children}
                </Container>
            </div>
        </>
    );
};

const App = () => {
    return (
        <Routes>
            <Route
                exact
                path='/'
                element={
                    <Layout>
                        <Home />
                    </Layout>
                }
            />
            <Route path='/auth' element={<Login />} />

            <Route
                path='/search/:query'
                element={
                    <Layout>
                        <SearchScreen />
                    </Layout>
                }
            />

            <Route
                path='/watch/:id'
                element={
                    <Layout>
                        <WatchPage />
                    </Layout>
                }
            />

            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
};

export default App;
