import React, { useEffect, useState } from 'react';
import HomeRightContent from '../../Component/HomeComponents/HomeRightComponent/HomeRightContent/HomeRightContent';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import NotVerified from '../../Component/HomeComponents/HomeRightComponent/NotVerified/NotVerified.jsx';

const Home = () => {
    const auth = getAuth();
    const [isEmailVerified, setIsEmailVerified] = useState({
        email: "",
        displayName: "displayName",
        emailVerified: false,
    });


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setIsEmailVerified({
                email: user.reloadUserInfo.email,
                displayName: user.reloadUserInfo.displayName,
                emailVerified: user.reloadUserInfo.emailVerified,
            });
        })

    }, [])
    console.log(isEmailVerified);

    return (
        <>
            <div>{isEmailVerified.emailVerified ? <HomeRightContent /> : <NotVerified userInfo={isEmailVerified} />}</div>
        </>
    )
}

export default Home  