import React from 'react'

const RegistrationLeft = () => {
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
                            <fieldset className='border-2 px-4 rounded-lg'>
                                <legend className='font-Nunito font-semibold text-[14px] text-common_color px-2'>
                                    Email <span>*</span>
                                </legend>
                                <input type="email"
                                    name="email"
                                    id="email" placeholder='Ladushing691@gmail.com' className='py-3 rounded-lg pl-2 placeholder:text-secondary_auth_color' />
                            </fieldset>

                            <fieldset className='border-2 px-4 rounded-lg'>
                                <legend className='font-Nunito font-semibold text-[14px] text-common_color px-2'>
                                    Full-name <span>*</span>
                                </legend>
                                <input type="text"
                                    name="text"
                                    id="text" placeholder='Nahid Sarwar' className='py-3 rounded-lg pl-2 placeholder:text-secondary_auth_color' />
                            </fieldset>
                            <fieldset className='border-2 px-4 rounded-lg'>
                                <legend className='font-Nunito font-semibold text-[14px] text-common_color px-2 '>
                                    Password <span>*</span>
                                </legend>
                                <input type="password"
                                    name="password"
                                    id="password" placeholder='..............' className='py-3 rounded-lg pl-2 placeholder:text-secondary_auth_color' />
                            </fieldset>
                            <div>
                                <button className='font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-full rounded-full py-5 '>Sign Up</button>
                            </div>
                            <div className='text-center font-Nunito'>
                                <p className='text-secondary_auth_color'>Already  have an account ?<span className='text-orange-600'> Sign In</span></p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>




        </>
    )
}

export default RegistrationLeft