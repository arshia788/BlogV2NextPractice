import {configureStore} from '@reduxjs/toolkit';
import logeedSlice from './feaures/logeedSlice';
import roleSlice from './feaures/roleSlice';
import user_is_active from './feaures/user_is_active';

const store= configureStore({
    reducer:{
        logeedSlice:logeedSlice,
        roleSlice:roleSlice,
        user_is_active:user_is_active,
    }
})

export default store;
