import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import Group1 from '../../../../assets/HomeAssets/HomeAssetsRight/GroupListAssets/group1.gif';
import Group2 from '../../../../assets/HomeAssets/HomeAssetsRight/GroupListAssets/group2.gif';
import Group3 from '../../../../assets/HomeAssets/HomeAssetsRight/GroupListAssets/group3.gif';

const GroupList = () => {
    return (
        <div className='p-2 w-[327px] h-[250px] bg-stone-50 mt-5 rounded-xl shadow-xl'>

            <div className='flex items-center justify-between'>
                <div className='font-Poppins text-lg font-semibold'>
                    Group List
                </div>
                <span>
                    <BsThreeDotsVertical className='text-blue-600' />
                </span>
            </div>
            <div className='flex flex-col gap-y-4  h-[85%] mt-2 overflow-y-scroll '>
                {[...new Array(10)].map((_, indxe) => (

                    <div className='flex items-center justify-between border-b-[1px]  pb-2 border-b-gray-300'>
                        <div className='w-[60px] h-[60px] rounded-full shadow-lg'>
                            <picture>
                                <img src={Group1} alt={Group1} className='w-full h-full object-contain rounded-full' />
                            </picture>
                        </div>
                        <div class="flex flex-col items-start justify-center text-wrap w-[50%]  text-justify">
                            <h3 className='text-lg font-semibold font-poppins'>Friends Reunion</h3>
                            <p className='text-sm font-normal font-Poppins text-secondary_auth_color'> Hi Guys, Wassup!</p>
                        </div>
                        <div>
                            <button className='bg-blue-600 py-1 px-3 mr-2 font-semibold text-white rounded-xl font-Poppins '>Join</button>
                        </div>
                    </div>


                ))}



            </div>
        </div>
    )
}

export default GroupList