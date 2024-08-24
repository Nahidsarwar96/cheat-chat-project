import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Group2 from '../../../../assets/HomeAssets/HomeAssetsRight/GroupListAssets/group2.gif';
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { getAuth } from 'firebase/auth';
import moment from 'moment';
import { getTimeNow } from '../../../../../Utils/Moment/Moment';


const FriendRequest = () => {
    const db = getDatabase();
    const auth = getAuth();
    const [FriendRequestList, setFriendRequestList] = useState([]);


    /**
   * to do: Fetch all data from databse
   * *DBNAME:"users"
   */

    useEffect(() => {
        const FriendRequestDbRef = ref(db, "FriendRequest/");
        onValue(FriendRequestDbRef, (snapshot) => {
            let FriendRequestBlankArr = [];
            snapshot.forEach((item) => {
                if (auth.currentUser.uid == item.val().whoReceivedFriendRequestUid
                ) {

                    FriendRequestBlankArr.push({
                        ...item.val(),
                        FriendRequestKey: item.key,
                    });
                }

            });
            setFriendRequestList(FriendRequestBlankArr);
        });
    }, []);
    // console.log(FriendRequestList);


    /**
     * todo: handle rejectFriendRequest function implement
     * @param({item})
     */

    const rejectFriendRequest = (item) => {

        const friendRequestRef = ref(db, "FriendRequest/" + item?.FriendRequestKey)
        remove(friendRequestRef).then(() => {
            console.log("Reject Done");

        })

    }


    /**
     * todo: acceptFriendRequest function implement:
     * @param({item})
     */

    const acceptFriendRequest = (item = {}) => {
        const friendRef = ref(db, "Friends/");
        set(push(friendRef), {
            ...item,
            createdAt: getTimeNow(),
            whoReceivedFriendRequestUserKey: null,

        }).then(() => {
            const friendRequestRef = ref(db, "FriendRequest/" + item?.FriendRequestKey)
            remove(friendRequestRef).then(() => {

            })

        });

    }

    return (
        <div className='p-2 w-[340px] h-[250px] bg-stone-50 mt-5 rounded-xl shadow-xl'>

            <div className='flex items-center justify-between'>
                <div className='font-Poppins text-lg font-semibold relative'>
                    <span className=''>
                        Friend Request
                        <span class="flex h-8 w-8 absolute -top-1 left-36">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span class="relative flex justify-center items-center text-white rounded-full h-8 w-8 bg-sky-500">{FriendRequestList?.length}</span>
                        </span>
                    </span>
                </div>
                <span>
                    <BsThreeDotsVertical className='text-blue-600' />
                </span>
            </div>
            <div className='flex flex-col gap-y-4  h-[85%] mt-2 overflow-y-scroll scrollbar-thumb-blue-600 scrollbar-track-transparent scrollbar-thin'>
                {FriendRequestList?.map((item, index) => (

                    <div className='flex items-center justify-between border-b-[1px]  pb-2 border-b-gray-300'>
                        <div className='w-[60px] h-[60px] rounded-full shadow-lg'>
                            <picture>
                                <img
                                    src={item.whoSendFriendRequestProfilePicture ? item.whoSendFriendRequestProfilePicture : Group2}

                                    alt={item.whoSendFriendRequestProfilePicture ? item.whoSendFriendRequestProfilePicture : Group2}
                                    className='w-full h-full object-contain rounded-full' />
                            </picture>
                        </div>
                        <div class="flex flex-col items-start justify-center text-wrap w-[50%]  text-justify pl-2">
                            <h3 className='text-lg font-semibold font-poppins'>{item.whoSendFriendRequestName ? item.whoSendFriendRequestName : "Abc"}</h3>
                            <p className='text-sm font-normal font-Poppins text-secondary_auth_color'>{moment(item.createdAt).fromNow()}</p>
                        </div>
                        <div>
                            <button className='bg-blue-600 py-1 px-3 mr-2 font-semibold text-white rounded-xl font-Poppins ' onClick={() => acceptFriendRequest(item)}>A</button>
                            <button className='bg-red-600 py-1 px-3 mr-2 font-semibold text-white rounded-xl font-Poppins ' onClick={() => { rejectFriendRequest(item) }}>R</button>
                        </div>
                    </div>


                ))}



            </div>
        </div>
    )
}

export default FriendRequest