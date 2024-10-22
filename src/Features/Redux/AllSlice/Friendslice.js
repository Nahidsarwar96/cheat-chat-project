import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    friendsItem: {},
}

export const FriendSlice = createSlice({
    name: 'friends',
    initialState,
    reducers: {
        friendsInfo: (state, action) => {
            console.log(action.payload);

            state.friendsItem = action.payload;
        },

    },
})

// Action creators are generated for each case reducer function
export const { friendsInfo } = FriendSlice.actions

export default FriendSlice.reducer