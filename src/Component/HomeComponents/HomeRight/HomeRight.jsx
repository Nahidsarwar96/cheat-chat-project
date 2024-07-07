import React from 'react';
import Search from '../../commonComponents/Search/Search.jsx';
import GroupList from '../../HomeComponents/HomeRightComponent/GroupList/GroupList.jsx';

const HomeRight = () => {
    return (
        <>
            <div>
                <Search classname={"w-[327px] py-3 rounded-full px-[40px]"} />
                <GroupList />
            </div>
        </>
    )
}
export default HomeRight