import React, { useState } from 'react';
import Avatar from '../../../assets/HomeAssets/HomeAssetsLeft/Avatar.gif';

import Home from '../../../assets/HomeAssets/HomeAssetsLeft/home.gif';
import Chat from '../../../assets/HomeAssets/HomeAssetsLeft/chat.gif';
import Bell from '../../../assets/HomeAssets/HomeAssetsLeft/bell.gif';
import Settings from '../../../assets/HomeAssets/HomeAssetsLeft/setting.gif';
import LogOutIcon from '../../../assets/HomeAssets/HomeAssetsLeft/logout.gif';



const HomeLeft = () => {
    const [test, setTest] = useState("Chat");
    return (
        <>

            <div className='h-full w-[186px] rounded-2xl flex flex-col items-center justify-start bg-gradient-to-r from-cyan-500 to-blue-500'>
                <div>
                    <picture>
                        <img src={Avatar} alt={Avatar} className='cursor-pointer' />
                    </picture>
                </div>
                <div className='flex flex-col justify-center items-center gap-y-8'>
                    <div className={`${test == "home" && "w-full bg-white px-12 py-2 rounded-l-2xl iconShaded cursor-pointer"}`}>
                        <picture>
                            <img src={Home} alt={Home} className='mix-blend-multiply w-10 cursor-pointer' />
                        </picture>
                    </div>
                    <div className={`${test == "Chat" && "w-full bg-white px-12 py-2 rounded-l-2xl iconShaded cursor-pointer"}`}>
                        <picture>
                            <img src={Chat} alt={Chat} className='mix-blend-multiply w-10 cursor-pointer' />
                        </picture>
                    </div>
                    <div className={`${test == "Bell" && "w-full bg-white px-12 py-2 rounded-l-2xl iconShaded cursor-pointer"}`}>
                        <picture>
                            <img src={Bell} alt={Bell} className='mix-blend-multiply w-10 cursor-pointer' />
                        </picture>
                    </div>
                    <div className={`${test == "Settings" && "w-full bg-white px-12 py-2 rounded-l-2xl iconShaded cursor-pointer"}`}>
                        <picture>
                            <img src={Settings} alt={Settings} className='mix-blend-multiply w-10 cursor-pointer' />
                        </picture>
                    </div>
                </div>
                <div className='pt-4'>
                    <picture>
                        <img src={LogOutIcon} alt={LogOutIcon} className='mix-blend-multiply w-10 cursor-pointer' />
                    </picture>
                </div>
            </div>
        </>

    )
}

export default HomeLeft