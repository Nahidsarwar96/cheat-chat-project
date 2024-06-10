import React from 'react'
import SignUpImg from '../../assets/SignUp.png'

const RegistrationRight = () => {
    return (
        <>
            <div className='w-2/5	'>
                <picture>
                    <img src={SignUpImg} alt={SignUpImg} className='h-screen w-full' />
                </picture>
            </div>
        </>
    )
}

export default RegistrationRight