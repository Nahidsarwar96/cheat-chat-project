import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from "../../Features/Redux/AllSlice/slice.js"


const Notification = () => {

    const { counterReducer } = useSelector((state) => state)
    const [inputValue, setinputValue] = useState();
    const dispatch = useDispatch();

    function handleIncrement(input) {
        dispatch(increment(Number(input)))

    }

    function handleDecrement(input) {
        dispatch(decrement(Number(input)))
    }

    return (
        <>
            <div className='flex items-center justify-center flex-col w-full gap-y-5 '>
                <p className='font-bold text-3xl'>
                    {counterReducer.value}
                </p>
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => {
                        setinputValue(e.target.value);
                    }}
                />


                <div className=' flex gap-x-5'>
                    <button className='px-6 py-3 bg-blue-500 text-white text-2xl font-semibold rounded-xl' onClick={() => handleIncrement(inputValue)} >Increment</button>
                    <button className='px-6 py-3 bg-red-500 text-white text-2xl font-semibold rounded-xl' onClick={() => handleDecrement(inputValue)}>Decrement</button>
                    <button className='px-6 py-3 bg-green-500 text-white text-2xl font-semibold rounded-xl' onClick={() => dispatch(reset())}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Notification