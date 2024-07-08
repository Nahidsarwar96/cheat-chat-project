import React from 'react';
import Search from '../../commonComponents/Search/Search.jsx';
import GroupList from '../../HomeComponents/HomeRightComponent/GroupList/GroupList.jsx';
import Friends from '../HomeRightComponent/Friends/Friends.jsx';
import Userlist from '../HomeRightComponent/Userlist/Userlist.jsx'
const HomeRight = () => {
    return (
        <>
            <div className='w-full'>
                <Search classname={"w-full py-3 rounded-full px-[40px]"} />
                <div className='flex justify-between flex-wrap'>
                    <GroupList />
                    <Friends />
                    <Userlist />
                    <Userlist />
                    <Userlist />
                    <Userlist />

                </div>
            </div>
        </>
    )
}
export default HomeRight