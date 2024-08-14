import React, { useState } from 'react';
import Avatar from '../../../assets/HomeAssets/HomeAssetsLeft/Avatar.gif';

import Home from '../../../assets/HomeAssets/HomeAssetsLeft/home.gif';
import Chat from '../../../assets/HomeAssets/HomeAssetsLeft/chat.gif';
import Notification from '../../../assets/HomeAssets/HomeAssetsLeft/bell.gif';
import Settings from '../../../assets/HomeAssets/HomeAssetsLeft/setting.gif';
import LogOutIcon from '../../../assets/HomeAssets/HomeAssetsLeft/logout.gif';
import { NavLink, useLocation } from 'react-router-dom';
import { IoCloudUploadOutline } from "react-icons/io5";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";




const HomeLeft = () => {

    const Location = useLocation();
    const path = Location.pathname.split("/")[1];

    const uploader = Uploader({
        apiKey: "free", // Get production API keys from Bytescale
        mimeTypes: ["image/*"],         // Unrestricted by default. Supports * wildcard suffix.
        multi: false,

    });

    const options = {
        multi: true, editor: {
            images: {
                allowResizeOnMove: true,
                preview: true,
                crop: true,
                cropRatio: 4 / 3,
                cropShape: "circ"
            },
        },
    };




    return (
        <>

            <div className='h-full max-w-[175px] rounded-2xl flex flex-col items-center justify-start bg-gradient-to-r from-cyan-500 to-blue-500'>
                <div className='shadowProfile'>
                    <picture>
                        <img src={Avatar} alt={Avatar} className='cursor-pointer' />
                    </picture>


                    <span>
                        <UploadButton uploader={uploader}
                            options={options}
                            onComplete={(files) => console.log(files.map((x) => x.fileUrl))}>

                            {({ onClick }) =>
                                <button onClick={onClick}>
                                    <div className='absolute left-[42%] top-[40%] cursor-pointer z-10'>
                                        <span>
                                            <IoCloudUploadOutline className="text-3xl text-white" />
                                        </span>
                                    </div>
                                </button>
                            }
                        </UploadButton>
                    </span>



                </div>
                <div className='flex flex-col justify-center items-center gap-y-8'>

                    <NavLink to={"/"}>

                        <div className={`${path == "" && "w-full bg-white px-12 py-2 rounded-l-2xl iconShaded cursor-pointer"}`}>
                            <picture>
                                <img src={Home} alt={Home} className='mix-blend-multiply w-10 cursor-pointer' />
                            </picture>
                        </div>
                    </NavLink>

                    <NavLink to={"/chat"}>
                        <div className={`${path == "chat" && "w-full bg-white px-12 py-2 rounded-l-2xl iconShaded cursor-pointer"}`}>
                            <picture>
                                <img src={Chat} alt={Chat} className='mix-blend-multiply w-10 cursor-pointer' />
                            </picture>
                        </div>

                    </NavLink>

                    <NavLink to={"/notification"}>
                        <div className={`${path == "notification" && "w-full bg-white px-12 py-2 rounded-l-2xl iconShaded cursor-pointer"}`}>
                            <picture>
                                <img src={Notification} alt={Notification} className='mix-blend-multiply w-10 cursor-pointer' />
                            </picture>
                        </div>
                    </NavLink>
                    <NavLink to={"/settings"}>
                        <div className={`${path == "settings" && "w-full bg-white px-12 py-2 rounded-l-2xl iconShaded cursor-pointer"}`}>
                            <picture>
                                <img src={Settings} alt={Settings} className='mix-blend-multiply w-10 cursor-pointer' />
                            </picture>
                        </div>
                    </NavLink>
                </div>
                <div className='mt-10'>
                    <picture>
                        <img src={LogOutIcon} alt={LogOutIcon} className='mix-blend-multiply w-10 cursor-pointer' />
                    </picture>
                </div>
            </div>
        </>

    )
}

export default HomeLeft