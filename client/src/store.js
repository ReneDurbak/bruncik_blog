import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/user/authSlice'
import adminAuthReducer from './slices/admin/adminAuthSlice'
import {apiSlice}  from './slices/user/apiSlice';
import {apiAdminSlice} from './slices/admin/apiAdminSlice';
import uiReducer from "./slices/uiSlice";
import popupReducer from "./slices/popupSlice";


const store = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer,
        popup: popupReducer,
        adminAuth: adminAuthReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        [apiAdminSlice.reducerPath]: apiAdminSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})


export default store