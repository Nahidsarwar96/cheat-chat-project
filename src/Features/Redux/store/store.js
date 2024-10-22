import { configureStore } from '@reduxjs/toolkit';
import FriendReducer from '../AllSlice/Friendslice.js';

export const store = configureStore({
    reducer: {
        FriendStore: FriendReducer,
    },
})