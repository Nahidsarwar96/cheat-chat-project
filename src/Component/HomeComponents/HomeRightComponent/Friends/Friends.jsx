import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Group1 from '../../../../assets/HomeAssets/HomeAssetsRight/GroupListAssets/group1.gif';
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { getAuth } from 'firebase/auth';
import moment from 'moment';
import { getTimeNow } from '../../../../../Utils/Moment/Moment';



const Friends = () => {

    const db = getDatabase();
    const auth = getAuth();
    const [FriendsList, setFriendsList] = useState([]);


    /**
     * to do: Fetch all data from databse
     * *DBNAME:""
     */

    useEffect(() => {
        const FriendsDbRef = ref(db, "Friends/");
        onValue(FriendsDbRef, (snapshot) => {
            let FriendsBlankArr = [];
            snapshot.forEach((item) => {
                if (auth.currentUser.uid === item.val().whoReceivedFriendRequestUid) {

                    FriendsBlankArr.push({
                        ...item.val(),
                        FriendsKey: item.key,
                    });
                }

            });
            setFriendsList(FriendsBlankArr);
        });
    }, []);

    // console.log(FriendsList);


    /**
     * todo: handleBlocked function implement
     * @param({item})
     */

    const handleBlocked = ((item = {}) => {



        const makeObj = {
            blockByUid: item.whoReceivedFriendRequestUid,
            blockByName: item.whoReceivedFriendRequestName,
            blockByEmail: item.whoReceivedFriendRequestEmail,
            blockByProfile_picture: item.whoReceivedFriendRequestProfilePicture ? item.whoReceivedFriendRequestProfilePicture : "",


            blockedUid: item.whoSendFriendRequestUid,
            blockedName: item.whoSendFriendRequestName,
            blockedEmail: item.whoSendFriendRequestEmail,
            blockedProfile_picture: item.whoSendFriendRequestProfilePicture ? item.whoSendFriendRequestProfilePicture : "",
            createdAt: getTimeNow(),

            FriendRequestKey: item.FriendRequestKey,

        }


        const blockRef = ref(db, "blockedUser/")
        set(push(blockRef), makeObj).then(() => {
            remove(ref(db, "Friends/" + item.FriendsKey))
        })

    });


    return (
        <div className='p-2 w-[340px] h-[250px] bg-stone-50 mt-5 rounded-xl shadow-xl'>

            <div className='flex items-center justify-between'>
                <div className='font-Poppins text-lg font-semibold relative'>
                    <span className=''>
                        Friends
                        <span class="flex h-8 w-8 absolute -top-1 left-[70px]">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span class="relative flex justify-center items-center text-white rounded-full h-8 w-8 bg-sky-500">{FriendsList.length}</span>
                        </span>
                    </span>
                </div>
                <span>
                    <BsThreeDotsVertical className='text-blue-600' />
                </span>
            </div>
            <div className='flex flex-col gap-y-4  h-[85%] mt-2 overflow-y-scroll scrollbar-thumb-blue-600 scrollbar-track-transparent scrollbar-thin'>
                {FriendsList.map((item, index) => (

                    <div className='flex items-center justify-between border-b-[1px]  pb-2 border-b-gray-300'>
                        <div className='w-[60px] h-[60px] rounded-full shadow-lg'>
                            <picture>
                                <img
                                    src={item.whoSendFriendRequestProfilePicture ? item.whoSendFriendRequestProfilePicture : Group1}
                                    alt={item.whoSendFriendRequestProfilePicture ? item.whoSendFriendRequestProfilePicture : Group1}
                                    className='w-full h-full object-contain rounded-full' />
                            </picture>
                        </div>
                        <div class="flex flex-col items-start justify-center text-wrap w-[50%]  text-justify pl-2">
                            <h3 className='text-lg font-semibold font-poppins'>{item.whoSendFriendRequestName ? item.whoSendFriendRequestName : "Abc"}</h3>
                            <p className='text-sm font-normal font-Poppins text-secondary_auth_color'> {moment(item.createdAt).fromNow()}</p>
                        </div>
                        <div>
                            <button className='bg-red-600 py-1 px-3 mr-2 font-semibold text-white rounded-xl font-Poppins ' onClick={() => { handleBlocked(item) }}>Block</button>
                        </div>

                    </div>


                ))}



            </div>
        </div>
    )
}

export default Friends