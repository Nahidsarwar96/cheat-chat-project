import React, { useEffect, useState } from 'react';
import { FaRegEye } from "react-icons/fa6";
// import { CSSProperties } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { EmailValidators, fullNameValidators, passwordvalidators } from "../../../Utils/Validation.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    onAuthStateChanged,
    updateProfile
} from "firebase/auth";
import BeatLoader from "react-spinners/BeatLoader.js";
import { SuccessToast, ErrorToast, InfoToast } from '../../../Utils/Toast.js';
import { getDatabase, ref, set, push } from "firebase/database";
import { getTimeNow } from '../../../Utils/Moment/Moment.js';
import { useNavigate, Link } from "react-router-dom";





const RegistrationLeft = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const db = getDatabase();
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [eyeOpen, seteyeOpent] = useState(true);
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState("#ffffff");

    /**
     * Error useState
     */


    const [emailError, setEmailError] = useState("");
    const [fullNameError, setFullNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    /**
     * to do handleEmail function complement
     * @param({event})
     */
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    /**
     * to do handleFullName function complement
     * @param({event})
     */

    const handleFullName = (event) => {
        setFullName(event.target.value)
    }

    /**
     * to do handlePassword function complement
     * @param({event})
     */
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    /**
     * to do eyeOpen function complement
     * 
     */
    const handleeye = () => {
        seteyeOpent(!eyeOpen);
    }

    const handleSubmit = () => {
        if (!email || !EmailValidators(email)) {
            setEmailError("Email Missing or wrong email");
        } else if (!fullName || !fullNameValidators(fullName)) {
            setEmailError("");
            setFullNameError("FullName Missing or in 20 characters");
        } else if (!password || !passwordvalidators(password)) {
            setFullNameError("");
            setPasswordError("Password Missing");
        } else {
            setPasswordError("");
            setLoading(true);
            createUserWithEmailAndPassword(auth, email, password).then((userInfo) => {
                SuccessToast(`${fullName} Registration Done`)
            }).then(() => {
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        InfoToast(`${fullName} Please check your email`, "top-center")
                    });
            }).then(() => {
                updateProfile(auth.currentUser, {
                    displayName: fullName,
                })
            }).then(() => {
                const usersRef = ref(db, "/users")
                set(push(usersRef), {
                    uid: auth.currentUser.uid,
                    userName: fullName,
                    userEmail: auth.currentUser.email,
                    createAt: getTimeNow(),
                }).then(() => {
                    console.log("write data on users collection");
                    navigate("/login");
                }).catch((err) => {
                    console.error("User data write failed");
                })
            })

                .catch((err) => {
                    // let ourError = err.message.split("/")[1]
                    // ErrorToast(ourError.slice(0, ourError.length - 2), "top-left")
                    ErrorToast(err.code, "top-left")

                }).finally(() => {
                    setEmail("");
                    setFullName("");
                    setPassword("");
                    setEmailError("");
                    setFullNameError("");
                    setPasswordError("");
                    setLoading(false);
                })
        }
    }


    return (
        <>
            <div className=' w-3/5 h-screen'>
                <div className='flex justify-center items-center h-full flex-col gap-y-20'>
                    <div className='flex flex-col  gap-y-10'>
                        <div className='flex flex-col gap-y-3'>
                            <h1 className='text-[34px] font-bold text-promary_auth_color font-Nunito'>Get started with easily register</h1>
                            <p className='font-normal font-Nunito text-secondary_auth_color text-xl	'>Free register and you can enjoy it</p>
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
                                        value={email}
                                        onChange={handleEmail}
                                        placeholder='Ladushing691@gmail.com' className='py-3 rounded-lg pl-2 placeholder:text-secondary_auth_color' />
                                </fieldset>
                                <span className='text-red-500 text-sm font-normal font-Nunito'>
                                    {emailError}
                                </span>
                            </div>


                            <div>
                                <fieldset className='border-2 px-4 rounded-lg'>
                                    <legend className='font-Nunito font-semibold text-[14px] text-common_color px-2'>
                                        Full-name <span>*</span>
                                    </legend>
                                    <input type="text"
                                        name="text"
                                        id="text"
                                        value={fullName}
                                        onChange={handleFullName}
                                        placeholder='Nahid Sarwar' className='py-3 rounded-lg pl-2 placeholder:text-secondary_auth_color' />
                                </fieldset>
                                <span className='text-red-500 text-sm font-normal font-Nunito'>
                                    {fullNameError}
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
                                            value={password}
                                            onChange={handlePassword}
                                            placeholder='..............' className='py-3 rounded-lg pl-2 placeholder:text-secondary_auth_color' />
                                        <span className='cursor-pointer' onClick={handleeye}>
                                            {eyeOpen ? <FaRegEyeSlash /> : <FaRegEye />}
                                        </span>
                                    </div>
                                </fieldset>
                                <span className='text-red-500 text-sm font-normal font-Nunito'>
                                    {passwordError}
                                </span>
                            </div>
                            <div className='cursor-pointer' onClick={handleSubmit}>
                                <button className='font-semibold text-white bg-violet-600 w-full rounded-full py-4'>{loading ? (<BeatLoader
                                    color={color}
                                    loading={loading}
                                    // cssOverride={override}
                                    size={20}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />) : "Sign Up"}</button>
                            </div>
                            <div className='text-center font-Nunito'>

                                <Link to="/login"> <p className='text-secondary_auth_color'>Already  have an account ? <span className='text-orange-600 pl-1'> Sign In</span>

                                </p> </Link>

                            </div>

                        </div>
                    </div>

                </div>
            </div>




        </>
    )
}

export default RegistrationLeft