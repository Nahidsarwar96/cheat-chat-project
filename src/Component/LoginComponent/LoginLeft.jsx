import React, { useEffect, useState } from 'react';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { EmailValidators, passwordvalidators } from '../../../Utils/Validation.js';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { SuccessToast, ErrorToast, InfoToast } from '../../../Utils/Toast.js';
import { Bars } from 'react-loader-spinner'
import { getDatabase, ref, set, push } from "firebase/database";
import { getTimeNow } from '../../../Utils/Moment/Moment.js';





const LoginLeft = () => {
    const db = getDatabase();
    const auth = getAuth();
    const navigate = useNavigate();
    const [eyeOpen, seteyeOpent] = useState(true);
    const [loading, setLoading] = useState(false);
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
            setLoading(true);
            signInWithEmailAndPassword(auth, email, password).then((loginInfo) => {
                console.log(loginInfo);
                SuccessToast("Login Success", "bottom-left")
                navigate("/");
            }).catch((err) => {
                ErrorToast(`${err.code}`)

            }).finally(() => {
                setLoading(false);
                setLoginError({
                    ...loginError,
                    emailError: "",
                    passwordError: ""
                })
            })
        }
    })

    /**
     * to do: handle login Google
     */


    const HandleLoginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                return user;
            })
            .then((userCredintial) => {


                const { photoUrl, displayName, email, localId } =
                    userCredintial.reloadUserInfo;
                const usersRef = ref(db, "users/");
                set(push(usersRef), {
                    uid: localId,
                    userName: displayName,
                    usersProfile_picture: photoUrl,
                    userEmail: email,
                    createdAt: getTimeNow(),
                });
            })
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;

            });
    };
    // const handleLoginGoogle = () => {


    //     const provider = new GoogleAuthProvider();
    //     signInWithPopup(auth, provider)
    //         .then((result) => {

    //             const credintial = GoogleAuthProvider.credentialFromResult(result);
    //             const token = credintial.accessToken;
    //             const user = result.user;
    //             return user;
    //         }).then((userCredintial) => {
    //             const [photoUrl, displayName, email, localId] = userCredintial.reloadUserInfo;

    //             const userRef = ref(rdb, "users/");
    //             set(push(userRef), {
    //                 uid: localId,
    //                 userName: displayName,
    //                 usersProfile_picture: photoUrl,
    //                 userEmail: email,
    //                 createAt: getTimeNow(),
    //             })
    //         })

    //         .then(() => {
    //             console.log("Ok");
    //         })

    //         .catch((error) => {
    //             const errorCode = error.code;

    //         });
    // }

    return (

        <>
            <div className=' w-3/5 h-screen'>
                <div className='flex justify-center items-center h-full flex-col gap-y-20'>
                    <div className='flex flex-col  gap-y-10'>
                        <div className='flex flex-col gap-y-3'>
                            <h1 className='text-[34px] font-bold text-promary_auth_color font-Nunito'>Login to your account! </h1>

                        </div>
                        <div onClick={HandleLoginWithGoogle} className='border-[2px] border-gray-200 py-5 px-2 rounded-xl'>
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
                                        value={loginInfo.email}
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
                                            value={loginInfo.password}
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
                            <div className='cursor-pointer'>
                                {loading ? (<button className='font-semibold text-white bg-violet-600 w-full rounded-xl'>
                                    <span className='flex justify-center items-center py-1'><Bars
                                        height="40"
                                        width="60"
                                        color="#4fa94d"
                                        ariaLabel="bars-loading"

                                    /></span>
                                </button>) : (
                                    <div className='cursor-pointer' onClick={handleLogin}>
                                        <button className='font-semibold text-white bg-violet-600 w-full rounded-xl py-4'> Login to continue
                                        </button> </div>)

                                }


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