import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'
import adminAuthReducer from './slices/adminAuthSlice'
import {apiSlice}  from './slices/apiSlice';
import {adminApiSlice} from './slices/adminApiSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        adminAuth: adminAuthReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        [adminApiSlice.reducerPath]: adminApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})


export default store