import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Group2 from '../../../../assets/HomeAssets/HomeAssetsRight/GroupListAssets/group2.gif';
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { getAuth } from 'firebase/auth';
import moment from 'moment';
import { getTimeNow } from '../../../../../Utils/Moment/Moment';

const BlockedUsers = () => {

    const db = getDatabase();
    const auth = getAuth();
    const [blockUserList, setBlockUserList] = useState([]);



    /**
    * to do: Fetch all data from databse
    * *DBNAME:""
    */

    useEffect(() => {
        const blockUserDbRef = ref(db, "blockedUser/");
        onValue(blockUserDbRef, (snapshot) => {
            let blockUserBlankArr = [];
            snapshot.forEach((item) => {
                if (auth.currentUser.uid == item.val().blockByUid
                ) {

                    blockUserBlankArr.push({
                        ...item.val(),
                        BlockKey: item.key,
                        createdAt: getTimeNow(),
                    });
                }

            });
            setBlockUserList(blockUserBlankArr);
        });
    }, []);


    // console.log(blockUserList);



    /**
     * todo: handleUnblock function implement
     * param({item})
     */

    const handleUnblock = ((item) => {

        const unblockObj = {

            FriendRequestKey: item.FriendRequestKey,
            createdAt: getTimeNow(),
            whoReceivedFriendRequestEmail: item.blockByEmail,
            whoReceivedFriendRequestName: item.blockByName,
            whoReceivedFriendRequestProfilePicture: item.blockByProfile_picture,
            whoReceivedFriendRequestUid: item.blockByUid,

            whoSendFriendRequestEmail: item.blockedEmail,
            whoSendFriendRequestName: item.blockedName,
            whoSendFriendRequestUid: item.blockedUid,
            whoSendFriendRequestProfilePicture: item.blockedProfile_picture ? item.blockedProfile_picture : ""


        }

        const friendsRef = ref(db, "Friends/")
        set(push(friendsRef), unblockObj).then(() => {
            remove(ref(db, "blockedUser/" + item.BlockKey))
        })


    });





    return (
        <div className='p-2 w-[340px] h-[250px] bg-stone-50 mt-5 rounded-xl shadow-xl'>

            <div className='flex items-center justify-between'>
                <div className='font-Poppins text-lg font-semibold relative'>
                    <span className=''>
                        Blocked User
                        <span class="flex h-8 w-8 absolute -top-1 left-[120px]">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span class="relative flex justify-center items-center text-white rounded-full h-8 w-8 bg-sky-500">{blockUserList.length}</span>
                        </span>
                    </span>
                </div>
                <span>
                    <BsThreeDotsVertical className='text-blue-600' />
                </span>
            </div>
            <div className='flex flex-col gap-y-4  h-[85%] mt-2 overflow-y-scroll scrollbar-thumb-blue-600 scrollbar-track-transparent scrollbar-thin'>
                {blockUserList.map((item, index) => (

                    <div className='flex items-center justify-between border-b-[1px]  pb-2 border-b-gray-300'>
                        <div className='w-[60px] h-[60px] rounded-full shadow-lg'>
                            <picture>
                                <img
                                    src={item.blockedProfile_picture ? item.blockedProfile_picture : Group2}
                                    alt={item.blockedProfile_picture ? item.blockedProfile_picture : Group2}
                                    className='w-full h-full object-contain rounded-full' />
                            </picture>
                        </div>
                        <div class="flex flex-col items-start justify-center text-wrap w-[50%]  text-justify pl-2">
                            <h3 className='text-lg font-semibold font-poppins'>{item.blockedName ? item.blockedName : "abc"}</h3>
                            <p className='text-sm font-normal font-Poppins text-secondary_auth_color'>
                                {moment(item.createdAt).calendar()}
                            </p>
                        </div>
                        <div>
                            <button className='bg-blue-600 py-1 px-3 mr-2 font-semibold text-white rounded-xl font-Poppins ' onClick={() => { handleUnblock(item) }}>Unblock</button>
                        </div>
                    </div>


                ))}



            </div>
        </div>
    )
}

export default BlockedUsers