import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Group1 from '../../../../assets/HomeAssets/HomeAssetsRight/GroupListAssets/group1.gif';

const Friends = () => {
    return (
        <div className='p-2 w-[340px] h-[250px] bg-stone-50 mt-5 rounded-xl shadow-xl'>

            <div className='flex items-center justify-between'>
                <div className='font-Poppins text-lg font-semibold'>
                    Friends
                </div>
                <span>
                    <BsThreeDotsVertical className='text-blue-600' />
                </span>
            </div>
            <div className='flex flex-col gap-y-4  h-[85%] mt-2 overflow-y-scroll scrollbar-thumb-blue-600 scrollbar-track-transparent scrollbar-thin'>
                {[...new Array(10)].map((_, index) => (

                    <div className='flex items-center justify-between border-b-[1px]  pb-2 border-b-gray-300'>
                        <div className='w-[60px] h-[60px] rounded-full shadow-lg'>
                            <picture>
                                <img src={Group1} alt={Group1} className='w-full h-full object-contain rounded-full' />
                            </picture>
                        </div>
                        <div class="flex flex-col items-start justify-center text-wrap w-[50%]  text-justify pl-2">
                            <h3 className='text-lg font-semibold font-poppins'>Friends Reunion</h3>
                            <p className='text-sm font-normal font-Poppins text-secondary_auth_color'> Hi Guys, Wassup!</p>
                        </div>
                        <div>
                            <span className='text-secondary_auth_color font-poppins text-xs'>Today, 8:56pm</span>
                        </div>
                    </div>


                ))}



            </div>
        </div>
    )
}

export default Friends