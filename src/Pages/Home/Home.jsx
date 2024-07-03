import React from 'react'
import HomeLeft from '../../Component/HomeComponents/HomeLeft/HomeLeft';
import HomeRight from '../../Component/HomeComponents/HomeRight/HomeRight';

const Home = () => {
    return (
        <>
            <div className='flex justify-between items-center bg-blue-200 h-screen p-9'>
                <HomeLeft />
                <HomeRight />
            </div>
        </>
    )
}

export default Home  