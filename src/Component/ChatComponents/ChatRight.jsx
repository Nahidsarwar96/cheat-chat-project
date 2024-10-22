import React, { useState } from 'react';
import Avatar from '../../assets/ChatAsset/Avatar.png';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoIosSend } from "react-icons/io";
import { FaCamera, FaFaceSmile } from 'react-icons/fa6';
import EmojiPicker from 'emoji-picker-react';
import { useSelector } from 'react-redux';
import { getDatabase, ref, set, push } from "firebase/database";
import { getTimeNow } from '../../../Utils/Moment/Moment';
import ModalComponent from "../commonComponents/ModalComponents/ModalComponent.jsx"


const ChatRight = () => {
    const [showEmojiPicker, setshowEmojiPicker] = useState(false);
    const [inputValue, setinputValue] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);
    const db = getDatabase();

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

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


    const { friendsItem } = useSelector((state) => state.FriendStore);
    // console.log(friendsItem);


    /**
     * todo: handleMessageSend function implement
     */

    const handleMessageSend = () => {
        if (inputValue) {
            set(push(ref(db, 'singleMsg/')), {
                msg: inputValue,
                createdAt: getTimeNow(),
            }).then(() => {
                console.log("Message Sent");

            }).catch((err) => {
                console.error(err)
            }).finally(() => {
                setinputValue("")
            })
        }
    }

    return (
        <>
            <div className='flex items-center justify-between border-b-2 border-b-gray-600 pb-5'>
                <div className='flex gap-x-[30px] items-center'>
                    <picture>
                        <img
                            src={friendsItem.whoSendFriendRequestProfilePicture || Avatar}
                            alt={Avatar} />
                    </picture>
                    <div className='flex flex-col '>
                        <h3 className="text-2xl font-semibold">{friendsItem.whoSendFriendRequestName || "Swathi"}</h3>
                        <p>Online</p>
                    </div>
                </div>

                <div>
                    <BsThreeDotsVertical className='text-blue-700 text-2xl' />
                </div>

            </div>

            {/*Chat page*/}

            <div className='h-[60vh] bg-red-200 overflow-y-scroll p-5'>
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
                            <span >
                                <FaCamera onClick={() => openModal()} />
                            </span>
                        </div>
                    </div>

                </div>
                <button className='mx-2 px-4 bg-blue-600 text-white text-2xl rounded-lg' onClick={handleMessageSend}>
                    <IoIosSend />
                </button>
            </div>
            <ModalComponent
                openModal={openModal}
                closeModal={closeModal}
                modalIsOpen={modalIsOpen}
            >

                <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div>


            </ModalComponent>
        </>


    )
}

export default ChatRight