import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Group2 from '../../../../assets/HomeAssets/HomeAssetsRight/GroupListAssets/group2.gif';
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import moment from 'moment';
import { getAuth } from 'firebase/auth';
import { getTimeNow } from '../../../../../Utils/Moment/Moment';


const Userlist = () => {
    const db = getDatabase();
    const auth = getAuth();
    const [users, setUsers] = useState([]);
    const [isFriendRequest, setIsFriendRequest] = useState([]);
    /**
     * to do: Fetch all data from databse
     * *DBNAME:"users"
     */

    useEffect(() => {
        const userDbRef = ref(db, "users/");
        onValue(userDbRef, (snapshot) => {
            let userBlankArr = [];
            snapshot.forEach((item) => {
                if (auth.currentUser.uid !== item.val().uid) {

                    userBlankArr.push({
                        ...item.val(),
                        useKey: item.key,
                    });
                }


            });
            setUsers(userBlankArr);
        });
    }, []);

    // console.log(users);


    /**
     * todo: handleFriendRequest Function Implement
     * @param({user})
     */

    const handleFriendRequest = (user) => {
        const FriendRequestRef = ref(db, 'FriendRequest/')
        set(push(FriendRequestRef), {
            whoSendFriendRequestName: auth.currentUser.displayName,
            whoSendFriendRequestEmail: auth.currentUser.email,
            whoSendFriendRequestUid: auth.currentUser.uid,
            whoSendFriendRequestProfilePicture: auth.currentUser.photoURL ? auth.currentUser.photoURL : null,
            whoReceivedFriendRequestUid: user.uid,
            whoReceivedFriendRequestName: user.userName,
            whoReceivedFriendRequestEmail: user.userEmail,
            whoReceivedFriendRequestUserKey: user.useKey,
            whoReceivedFriendRequestProfilePicture: user.usersProfile_picture,
            createdAt: getTimeNow(),


        });

    }

    /**
     * Todo: fetch data from FriendRequest database
     * @param({})
     * hooks useEffect()
     */

    useEffect(() => {
        const friendRequestDbRef = ref(db, "FriendRequest/");

        onValue(friendRequestDbRef, (snapshot) => {
            let blankFriendRequestList = []
            snapshot.forEach((item) => {
                blankFriendRequestList.push(
                    item.val().whoReceivedFriendRequestUid +
                    item.val().whoSendFriendRequestUid
                );


            });

            setIsFriendRequest(blankFriendRequestList);
        });

    }, [])

    // console.log(isFriendRequest);


    return (
        <div className='p-2 w-[340px] h-[250px] bg-stone-50 mt-5 rounded-xl shadow-xl'>

            <div className='flex items-center justify-between'>
                <div className='font-Poppins text-lg font-semibold relative'>
                    <span className=''>
                        User List
                        <span class="flex h-8 w-8 absolute -top-1 left-20">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span class="relative flex justify-center items-center text-white rounded-full h-8 w-8 bg-sky-500">{users?.length}</span>
                        </span>
                    </span>



                </div>

                <span>
                    <BsThreeDotsVertical className='text-blue-600' />
                </span>
            </div>
            <div className='flex flex-col gap-y-4  h-[85%] mt-2 overflow-y-scroll scrollbar-thumb-blue-600 scrollbar-track-transparent scrollbar-thin'>
                {users.map((user) => (

                    <div className='flex items-center justify-between border-b-[1px]  pb-2 border-b-gray-300'>
                        <div className='w-[60px] h-[60px] rounded-full shadow-lg'>
                            <picture>
                                <img
                                    src={`${user.usersProfile_picture ? user.usersProfile_picture : Group2}
                                        `}
                                    alt="Missing"
                                    className='w-full h-full object-contain rounded-full' />
                            </picture>
                        </div>
                        <div class="flex flex-col items-start justify-center text-wrap w-[50%]  text-justify pl-2">
                            <h3 className='text-lg font-semibold font-poppins'>{`${user.userName ? user.userName : "xyz"}
                                    `}</h3>
                            <p className='text-sm font-normal font-Poppins text-secondary_auth_color'>
                                {moment(user.createdAt).calendar()}
                            </p>
                        </div>
                        <div>

                            {isFriendRequest.includes(user.uid + auth.currentUser.uid || user.uid + auth.currentUser.uid) ? (<button onClick={() => handleFriendRequest(user)} className='bg-blue-600 py-1 px-3 mr-2 font-semibold text-white rounded-xl font-Poppins '>
                                -
                            </button>) : (<button onClick={() => handleFriendRequest(user)} className='bg-blue-600 py-1 px-3 mr-2 font-semibold text-white rounded-xl font-Poppins '>
                                +
                            </button>)}


                        </div>
                    </div>


                ))}



            </div>
        </div>
    )
}

export default Userlist