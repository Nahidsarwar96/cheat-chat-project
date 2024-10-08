import React from 'react'
import ChatLeft from '../../Component/ChatComponents/ChatLeft';
import ChatRight from '../../Component/ChatComponents/ChatRight';

const Chat = () => {
    return (
        <>
            <div className='w-full flex gap-x-10'>
                <div className=' w-[40%]'>
                    <ChatLeft />
                </div>
                <div className=' w-[70%] border-2 border-gray-400 rounded-lg p-2'>
                    <ChatRight />
                </div>
            </div>
        </>
    )
}

export default Chat