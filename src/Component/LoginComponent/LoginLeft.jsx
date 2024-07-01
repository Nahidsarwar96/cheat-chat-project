import React, { useEffect, useState } from 'react';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";



const LoginLeft = () => {

    const [eyeOpen, seteyeOpent] = useState(true);
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })

    /**
     * to do: handle login input 
     */

    const handleLoginInput = (e) => {
        setLoginInfo(
            {
                ...loginInfo,
                [e.target.id]: e.target.value,
            }
        )
    }

    return (



        <>
            <div className=' w-3/5 h-screen'>
                <div className='flex justify-center items-center h-full flex-col gap-y-20'>
                    <div className='flex flex-col  gap-y-10'>
                        <div className='flex flex-col gap-y-3'>
                            <h1 className='text-[34px] font-bold text-promary_auth_color font-Nunito'>Login to your account! </h1>

                        </div>
                        <div className='border-[2px] border-gray-200 py-5 px-1 rounded-xl'>
                            <button className='flex items-center gap-x-2 text-[18px] font-bold text-promary_auth_color font-Nunito'>
                                <FcGoogle className='text-3xl' />
                                Login With Google
                            </button>
                        </div>
                        <div className='flex flex-col gap-y-6'>
                            <div>
                                <fieldset className='border-2 px-4 rounded-lg'>
                                    <legend className='font-Nunito font-semibold text-[14px] text-common_color px-2'>
                                        Email <span>*</span>
                                    </legend>
                                    <input type="email"
                                        name="email"
                                        id="email"
                                        onChange={handleLoginInput}
                                        placeholder='Ladushing691@gmail.com' className='py-3 rounded-lg pl-2 placeholder:text-secondary_auth_color' />
                                </fieldset>
                                <span className='text-red-500 text-sm font-normal font-Nunito'>
                                    {/* {emailError} */}
                                </span>
                            </div>

                            <div>
                                <fieldset className='border-2 px-4 rounded-lg'>
                                    <legend className='font-Nunito font-semibold text-[14px] text-common_color px-2 '>
                                        Password <span>*</span>
                                    </legend>
                                    <div className='flex items-center justify-between'>
                                        <input type={eyeOpen ? "password" : "text"}
                                            name="password"
                                            id="password"
                                            // value={password}
                                            onChange={handleLoginInput}
                                            placeholder='..............' className='py-3 rounded-lg pl-2 placeholder:text-secondary_auth_color' />
                                        <span className='cursor-pointer' onClick={() => { seteyeOpent(!eyeOpen) }}>
                                            {eyeOpen ? <FaRegEyeSlash /> : <FaRegEye />}
                                        </span>
                                    </div>
                                </fieldset>

                            </div>
                            <div className='cursor-pointer'>
                                <button className='font-semibold text-white bg-violet-600 w-full rounded-xl py-4'> Login to continue</button>
                            </div>
                            <div className='text-center font-Nunito'>
                                <p className='text-secondary_auth_color'>Don't have an account? ?<span className='text-orange-600'> Sign Up</span></p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LoginLeft