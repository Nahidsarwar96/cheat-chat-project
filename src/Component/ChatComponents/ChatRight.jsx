import React from 'react';
import Avatar from '../../assets/ChatAsset/Avatar.png';
import { BsThreeDotsVertical } from 'react-icons/bs';

const ChatRight = () => {
    return (
        <div className='flex items-center justify-between border-b-2 border-b-gray-300'>
            <div className='flex gap-x-[30px] items-center'>
                <picture>
                    <img src={Avatar} alt={Avatar} />
                </picture>
                <div className='flex flex-col'>
                    <h3>Swathi</h3>
                    <p>Online</p>
                </div>
            </div>

            <div>
                <BsThreeDotsVertical className='text-blue-700 text-2xl' />
            </div>

        </div>
    )
}

export default ChatRight