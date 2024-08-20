import React, { useEffect, useState } from 'react';
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
import { getDatabase, ref, set, onValue, update } from "firebase/database";
import { SuccessToast } from '../../../../Utils/Toast';
import { getAuth } from 'firebase/auth';



const HomeLeft = () => {
    const auth = getAuth();
    const Location = useLocation();
    const [profilePictureUpdate, setProfilePictureUpdate] = useState("");
    const [userList, setUserList] = useState({});
    const db = getDatabase();
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

    /**
     * to do get all users function
     */

    useEffect(() => {
        const userId = auth.currentUser.uid;
        const starCountRef = ref(db, 'users/');
        onValue(starCountRef, (snapshot) => {
            snapshot.forEach((item) => {
                if (userId === item.val().uid) {
                    setUserList({
                        ...item.val(),
                        userKey: item.key,
                    });
                }

            });


        });

    }, [])

    // console.log(userList);

    // const dbref for profile update 
    const profileUpdateRef = ref(db, `users/${userList.userKey}`);

    return (
        <>

            <div className='h-screen w-[305px] rounded-2xl flex flex-col items-center justify-start bg-gradient-to-r from-cyan-500 to-blue-500'>
                <div className='relative shadowProfile '>
                    <picture className='flex item-center justify-center pt-8'>
                        <img
                            src={userList.usersProfile_picture ? userList.usersProfile_picture : Avatar}
                            alt={Avatar}
                            className='cursor-pointer rounded-full w-[100px] h-[100px] ' />
                    </picture>
                    <h1 className='text-white text-center font-Poppins font-medium text-xl'>{auth.currentUser.displayName}</h1>

                    <span>
                        <UploadButton uploader={uploader}
                            options={options}
                            onComplete={
                                (files) =>
                                    update(profileUpdateRef, {
                                        usersProfile_picture
                                            : files[0].fileUrl
                                    }).then(() => {
                                        SuccessToast("Profile Update done", "top-center")
                                    }).catch((arr) => {
                                        ErrorToast(`${err.code}`);
                                    })

                            }>

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
            </div >
        </>

    )
}

export default HomeLeft