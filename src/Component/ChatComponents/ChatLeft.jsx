import React from 'react';
import Search from '../commonComponents/Search/Search';
import GroupList from '../HomeComponents/HomeRightComponent/GroupList/GroupList.jsx';
import Friends from '../HomeComponents/HomeRightComponent/Friends/Friends.jsx'


const ChatLeft = () => {
    return (
        <>
            <Search classname="w-full bg-white rounded-xl py-3 px-10" />
            <GroupList isChatc={true} />
            <Friends isChatc={true} />

        </>
    )
}

export default ChatLeft