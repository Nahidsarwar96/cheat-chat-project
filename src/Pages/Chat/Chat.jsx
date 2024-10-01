import React from 'react'
import ChatLeft from '../../Component/ChatComponents/ChatLeft';
import ChatRight from '../../Component/ChatComponents/ChatRight';

const Chat = () => {
    return (
        <>
            <div className='w-full flex'>
                <div className='bg-blue-900 w-[40%]'>
                    <ChatLeft />
                </div>
                <div className=' w-[60%]'>
                    <ChatRight />
                </div>
            </div>
        </>
    )
}

export default Chat