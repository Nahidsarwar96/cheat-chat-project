import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";

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
            <div className='bg-blue-300 h-[85%] mt-2 overflow-y-scroll'>

            </div>
        </div>
    )
}

export default GroupList