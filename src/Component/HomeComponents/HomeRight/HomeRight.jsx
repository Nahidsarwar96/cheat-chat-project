import React from 'react';
import Search from '../../commonComponents/Search/Search.jsx';
import GroupList from '../../HomeComponents/HomeRightComponent/GroupList/GroupList.jsx';
import Friends from '../HomeRightComponent/Friends/Friends.jsx';
import Userlist from '../HomeRightComponent/Userlist/Userlist.jsx';
import FriendRequest from '../HomeRightComponent/FriendRequest/FriendRequest.jsx';
import MyGroup from '../HomeRightComponent/MyGroup/MyGroup.jsx';
import BlockedUsers from '../HomeRightComponent/BlockedUsers/BlockedUsers.jsx';


const HomeRight = () => {
    return (
        <>
            <div className='w-full'>
                <Search classname={"w-full py-3 rounded-full px-[40px]"} />
                <div className='flex justify-between flex-wrap'>
                    <GroupList />
                    <Friends />
                    <Userlist />
                    <FriendRequest />
                    <MyGroup />
                    <BlockedUsers />
                </div>
            </div>
        </>
    )
}
export default HomeRight