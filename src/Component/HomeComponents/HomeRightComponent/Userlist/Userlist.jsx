import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Group2 from '../../../../assets/HomeAssets/HomeAssetsRight/GroupListAssets/group2.gif';
import { getDatabase, ref, onValue } from "firebase/database";
import moment from 'moment/moment';


const Userlist = () => {
    const db = getDatabase();
    const [users, setUsers] = useState([]);
    /**
     * to do: Fetch all data from databse
     * *DBNAME:"users"
     */

    useEffect(() => {
        const userDbRef = ref(db, "users/");
        onValue(userDbRef, (snapshot) => {
            let userBlankArr = [];
            snapshot.forEach((item) => {
                userBlankArr.push({
                    ...item.val(),
                    useKey: item.key,
                });

            });
            setUsers(userBlankArr);
        });
    }, []);

    console.log(users);
    return (
        <div className='p-2 w-[340px] h-[250px] bg-stone-50 mt-5 rounded-xl shadow-xl'>

            <div className='flex items-center justify-between'>
                <div className='font-Poppins text-lg font-semibold'>
                    User List
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
                                {moment(user.createAt).calendar()}
                            </p>
                        </div>
                        <div>
                            <button className='bg-blue-600 py-1 px-3 mr-2 font-semibold text-white rounded-xl font-Poppins '>+</button>
                        </div>
                    </div>


                ))}



            </div>
        </div>
    )
}

export default Userlist