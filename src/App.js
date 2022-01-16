import React, { useState } from 'react';

import { Container } from 'react-bootstrap';

import Home from './pages/HomePage/Home.jsx';
import Header from './components/header/Header.jsx';
import Sidebar from './components/sidebar/Sidebar';
import Login from './pages/LoginPage/Login.jsx';

import { Route, Routes, Navigate, Outlet } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

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
                    {/* {children} */}
                    <Outlet />
                </Container>
            </div>
        </>
    );
};

const App = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Layout />}>
                <Route exact path='home' element={<Home />} />
            </Route>
            <Route path='/auth' element={<Login />} />

            <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
    );
};

export default App;
