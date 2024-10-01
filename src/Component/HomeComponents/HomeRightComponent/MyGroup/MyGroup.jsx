import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Group1 from '../../../../assets/HomeAssets/HomeAssetsRight/GroupListAssets/group1.gif';
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from 'firebase/auth';


const MyGroup = () => {
    const auth = getAuth();
    const db = getDatabase();
    const [allGroup, setallGroup] = useState([]);
    const [allGroupJoinRequest, setAllGroupJoinRequest] = useState("");

    useEffect(() => {

        const groupInfoFetcher = () => {
            const starCountRef = ref(db, 'group/');
            onValue(starCountRef, (snapshot) => {
                let groupBlankArr = [];
                snapshot.forEach((item) => {
                    if (auth.currentUser.uid == item.val().whoCreateGroupUid) {
                        groupBlankArr.push({ ...item.val(), groupKey: item.key });
                    }
                });
                setallGroup(groupBlankArr);
            });
        };

        const getAllGroupRequest = () => {
            const starCountRef = ref(db, 'groupJoinRequest/');
            onValue(starCountRef, (snapshot) => {
                let groupJoinRequestArr = [];
                snapshot.forEach((item) => {
                    // if (auth.currentUser.uid == item.whoWantToJoinGroupUid
                    // ) {
                    groupJoinRequestArr.push(item.val().groupKey);
                    // }
                });
                setAllGroupJoinRequest(groupJoinRequestArr);
            });
        };


        groupInfoFetcher();
        getAllGroupRequest();

    }, [])


    return (
        <div className='p-2 w-[340px] h-[250px] bg-stone-50 mt-5 rounded-xl shadow-xl'>

            <div className='flex items-center justify-between'>
                <div className='font-Poppins text-lg font-semibold relative'>
                    <span className=''>
                        My Groups
                        <span class="flex h-8 w-8 absolute -top-1 left-[120px]">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span class="relative flex justify-center items-center text-white rounded-full h-8 w-8 bg-sky-500">{allGroup.length}</span>
                        </span>
                    </span>
                </div>
                <span>
                    <BsThreeDotsVertical className='text-blue-600' />
                </span>
            </div>
            <div className='flex flex-col gap-y-4  h-[85%] mt-2 overflow-y-scroll scrollbar-thumb-blue-600 scrollbar-track-transparent scrollbar-thin'>
                {allGroup?.map((item) => (

                    <div className='flex items-center justify-between border-b-[1px]  pb-2 border-b-gray-300' key={item.groupKey}>
                        <div className='w-[60px] h-[60px] rounded-full shadow-lg'>
                            <picture>
                                <img src={item ? item.groupImage : Group1}
                                    alt={item ? item.groupImage : Group1}
                                    className='w-full h-full object-contain rounded-full' />
                            </picture>
                        </div>
                        <div class="flex flex-col items-start justify-center text-wrap w-[50%]  text-justify pl-2">
                            <h3 className='text-lg font-semibold font-poppins'>   {item ? item.groupName : "Hello"}</h3>
                            <p className='text-sm font-normal font-Poppins text-secondary_auth_color'>
                                {item ? item.groupTagName : "Hello"
                                }
                            </p>
                        </div>
                        <div>
                            {allGroupJoinRequest.includes(item.groupKey) ? (
                                <div className='flex gap-x-2'>
                                    <button className='font-semibold text-lg px-2 bg-blue-600 text-white rounded-lg'>Acc</button>
                                    <button className='font-semibold text-lg px-2 bg-red-600 text-white rounded-lg'>Rej</button>
                                </div>

                            ) : (<span className='text-secondary_auth_color font-poppins text-xs'>
                                abc
                            </span>)}

                        </div>
                    </div>


                ))}



            </div>
        </div >
    )
}

export default MyGroup