import React from 'react'
import LoginImg from '../../assets/Login.gif';

const LoginRight = () => {
  return (
    <>
      <div className='w-2/5	'>
        <picture>
          <img
            src={LoginImg}
            alt={LoginImg}
            className='h-screen w-full' />
        </picture>
      </div>
    </>
  )
}

export default LoginRight