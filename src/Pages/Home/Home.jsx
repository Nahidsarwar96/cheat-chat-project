import React from 'react'
import HomeLeft from '../../Component/HomeComponents/HomeLeft/HomeLeft';
import HomeRight from '../../Component/HomeComponents/HomeRight/HomeRight';

const Home = () => {
    return (
        <>
            <div className='flex bg-blue-200 h-screen p-9 gap-x-10'>
                <HomeLeft />
                <HomeRight />
            </div>
        </>
    )
}

export default Home  