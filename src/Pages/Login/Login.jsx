import React from 'react';
import LoginLeft from '../../Component/LoginComponent/LoginLeft';
import LoginRight from '../../Component/LoginComponent/LoginRight';

const Login = () => {
    return (
        <div className='flex items-center'>
            <LoginLeft />
            <LoginRight />

        </div>
    )
}

export default Login