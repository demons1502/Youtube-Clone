import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions/auth_action';

import './Login.scss';

const Login = () => {
    console.log('re-render');
    const dispatch = useDispatch();

    const accessToken = useSelector((state) => state.auth.accessToken);

    const handleLogin = () => {
        dispatch(login());
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (accessToken) {
            navigate('/');
        }
    }, [accessToken, navigate]);

    return (
        <div className='login'>
            <div className='login__container'>
                <h2>Youtube Clone Project</h2>
                <img
                    src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                    alt=''
                />
                <button onClick={handleLogin}>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;
