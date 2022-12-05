import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import equipmentReducer from './usedEquipmentSlice'
import itemsReducer from './itemsSlice'


export default configureStore({
    reducer: {
        user: userReducer,
        usedEquipment: equipmentReducer,
        items: itemsReducer,
    }
})