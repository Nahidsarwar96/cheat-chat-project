import React from 'react'
import RegistrationLeft from '../../Component/RegistrationComponent/RegistrationLeft.jsx'
import RegistrationRight from '../../Component/RegistrationComponent/RegistrationRight.jsx'
const Registration = () => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <RegistrationLeft />
                <RegistrationRight />
            </div>
        </>
    )
}

export default Registration