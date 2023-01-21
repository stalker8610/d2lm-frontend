import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import equipmentReducer from './usedEquipmentSlice'
import itemsReducer from './itemsSlice'
import bucketEquipmentReducer from "./bucketEquipmentSlice";
import postmasterReducer from "./postmasterSlice";


export default configureStore({
    reducer: {
        user: userReducer,
        usedEquipment: equipmentReducer,
        items: itemsReducer,
        bucketEquipment: bucketEquipmentReducer,
        postmaster: postmasterReducer,
    }
})