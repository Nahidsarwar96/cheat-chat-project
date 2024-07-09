import React from 'react'
import HomeLeft from '../HomeLeft/HomeLeft';
import { Outlet } from 'react-router-dom';


const RootLayout = () => {
    return (
        <div>

            <div className='flex bg-blue-200 h-screen p-9 gap-x-10'>
                <HomeLeft />
                <Outlet />
            </div>

        </div>
    )
}

export default RootLayout