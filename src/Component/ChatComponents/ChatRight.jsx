import React, { useState } from 'react';
import Avatar from '../../assets/ChatAsset/Avatar.png';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoIosSend } from "react-icons/io";
import { FaCamera, FaFaceSmile } from 'react-icons/fa6';
import EmojiPicker from 'emoji-picker-react';


const ChatRight = () => {
    const [showEmojiPicker, setshowEmojiPicker] = useState(false);
    const [inputValue, setinputValue] = useState("");
    const handleEmoji = (argu) => {
        console.log(argu.emoji);
        setinputValue((prestate) => {
            return prestate + argu.emoji;

        })

    }

    const handlemsgInput = (event) => {
        const { value } = event.target;
        setinputValue(value);
    }




    return (
        <>
            <div className='flex items-center justify-between border-b-2 border-b-gray-600 pb-5'>
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

            {/*Chat page*/}

            <div className='h-[60vh] bg-red-400 overflow-y-scroll p-5'>
                <div className='flex flex-col gap-y-2'>
                    <div className='w-[30%] self-start'>
                        <div className='box_left w-full bg-blue-600 py-4 text-center rounded-xl '>
                            <h3 className='font-semibold font-Poppins text-sm text-white flex justify-center break-words p-2 text-justify z-10'>
                                Hey there!
                            </h3>
                        </div>
                        <p>Today, 2:01pm</p>
                    </div>
                    <div className='w-[30%] self-end'>
                        <div className='box_right w-full bg-blue-600 py-4 text-center rounded-xl'>
                            <h3 className='font-semibold font-Poppins text-sm text-white flex justify-center break-words p-2 text-justify z-10'>
                                Hey there!
                            </h3>
                        </div>
                        <p>Today, 2:01pm</p>
                    </div>
                    <div className='w-[30%] self-start'>
                        <div className='box_left w-full bg-blue-600 py-4 text-center rounded-xl '>
                            <h3 className='font-semibold font-Poppins text-sm text-white flex justify-center break-words p-2 text-justify z-10'>
                                Hey there!
                            </h3>
                        </div>
                        <p>Today, 2:01pm</p>
                    </div>
                    <div className='w-[30%] self-end'>
                        <div className='box_right w-full bg-blue-600 py-4 text-center rounded-xl'>
                            <h3 className='font-semibold font-Poppins text-sm text-white flex justify-center break-words p-2 text-justify z-10'>
                                Hey there!
                            </h3>
                        </div>
                        <p>Today, 2:01pm</p>
                    </div>
                    <div className='w-[30%]'>
                        <div className='box_left w-full bg-blue-600 py-4 text-center rounded-xl '>
                            <h3 className='font-semibold font-Poppins text-sm text-white flex justify-center break-words p-2 text-justify z-10'>
                                Hey there!
                            </h3>
                        </div>
                        <p>Today, 2:01pm</p>
                    </div>

                    <div className='w-[30%] self-end'>
                        <div className='box_right w-full bg-blue-600 py-4 text-center rounded-xl'>
                            <h3 className='font-semibold font-Poppins text-sm text-white flex justify-center break-words p-2 text-justify z-10'>
                                Hey there!
                            </h3>
                        </div>
                        <p>Today, 2:01pm</p>
                    </div>
                </div>
            </div>

            {/*Chat page*/}

            <div className='w-[99%] flex py-1'>
                <div className='w-full relative'>
                    <input type="text"
                        id="message"
                        name="message"
                        className='w-full bg-gray-300 py-3 rounded-xl px-4 pr-24'
                        placeholder='Write Your Message'
                        onChange={handlemsgInput}
                        value={inputValue}
                    />
                    <div className="absolute flex right-5 top-1/2 -translate-y-1/2 z-40">
                        <div className='flex gap-x-5'>
                            <span>
                                <FaFaceSmile className='text-yellow-600' onClick={() => setshowEmojiPicker(!showEmojiPicker)} />
                                {showEmojiPicker && (<div className='absolute bottom-[35px] right-1/3 ' >
                                    <EmojiPicker onEmojiClick={handleEmoji} />
                                </div>)}

                            </span>
                            <span>
                                <FaCamera />
                            </span>
                        </div>
                    </div>

                </div>
                <button className='mx-2 px-4 bg-blue-600 text-white text-2xl rounded-lg'>
                    <IoIosSend />
                </button>
            </div>
        </>


    )
}

export default ChatRight