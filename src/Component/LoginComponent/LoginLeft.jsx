import React, { useEffect, useState } from 'react';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { EmailValidators, passwordvalidators } from '../../../Utils/Validation.js';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();


const LoginLeft = () => {

    const [eyeOpen, seteyeOpent] = useState(true);
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    })

    /**
     * to do :using error state
     */
    const [loginError, setLoginError] = useState({
        emailError: "",
        passwordError: "",
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
    /**
     * to do: handle signin function implement
     * param({
     * 
     * })
     */

    const handleLogin = (() => {
        const { email, password } = loginInfo;
        if (!email || !EmailValidators(email)) {
            setLoginError({
                ...loginError,
                emailError: "Your credential is wrong!"
            })
        } else if (!password || !passwordvalidators(password)) {
            setLoginError({
                ...loginError,
                emailError: "",
                passwordError: "Your password wrong!"
            })
        } else {
            setLoginError({
                ...loginError,
                emailError: "",
                passwordError: ""
            })
            signInWithEmailAndPassword(auth, email, password).then((loginInfo) => {
                console.log(loginInfo);

            }).catch((err) => {
                console.log(err.code);
            })
        }
    })

    return (



        <>
            <div className=' w-3/5 h-screen'>
                <div className='flex justify-center items-center h-full flex-col gap-y-20'>
                    <div className='flex flex-col  gap-y-10'>
                        <div className='flex flex-col gap-y-3'>
                            <h1 className='text-[34px] font-bold text-promary_auth_color font-Nunito'>Login to your account! </h1>

                        </div>
                        <div className='border-[2px] border-gray-200 py-5 px-2 rounded-xl'>
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
                                    {loginError.emailError}
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
                                <span className='text-red-500 text-sm font-normal font-Nunito'>
                                    {loginError.passwordError}
                                </span>

                            </div>
                            <div className='cursor-pointer' onClick={handleLogin}>
                                <button className='font-semibold text-white bg-violet-600 w-full rounded-xl py-4'> Login to continue</button>
                            </div>
                            <div className='text-center font-Nunito'>

                                <Link to="/registration">
                                    <p className='text-secondary_auth_color'>Don't have an account?
                                        <span className='text-orange-600 pl-1'>   Sign Up</span>
                                    </p>
                                </Link>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LoginLeft