
import React from 'react';
import { IoSearch } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

const Search = ({ classname }) => {
    return (
        <div className='relative'>
            <span>
                <IoSearch className='absolute top-1/2 left-3 -translate-y-[40%]' />
            </span>
            <div>
                <input type="text" name="search" id="search" placeholder='Search' className={classname} />
            </div>
            <span className=''>
                <BsThreeDotsVertical className='absolute top-1/2 right-3 -translate-y-[40%] text-blue-600' />
            </span>

        </div>
    )
}

export default Search
