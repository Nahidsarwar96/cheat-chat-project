
import HomeLeft from '../HomeLeft/HomeLeft';
import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const RootLayout = () => {
    const auth = getAuth();
    const [isEmailVerified, setIsEmailVerified] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setIsEmailVerified(user.reloadUserInfo.emailVerified);
            console.log(user.reloadUserInfo.emailVerified);
        })

    }, [auth])

    return (
        <div>

            <div className='flex bg-blue-200 h-screen p-9 gap-x-10'>

                {isEmailVerified && <HomeLeft />}

                <Outlet />
            </div>

        </div>
    )
}

export default RootLayout