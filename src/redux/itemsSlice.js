import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: "items",
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        itemRendered: (state, action)=>{
            state.status = 'idle';
            state.error = null;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchItemDetails.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchItemDetails.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items.push(action.payload);
            })
            .addCase(fetchItemDetails.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }

})

export const fetchItemDetails = createAsyncThunk('items/fetchItemDetails', async (itemInstanceId, { getState }) => {

    const serverResponseSample = 
    {
        "characterId": "2305843009434704222",
        "itemHash": 1594120904,
        "itemInstanceId": "6917529790419947213",
        "isEquipped": true,
        "itemLevel": 1569,
        "perks": [
            {
                "perkHash": 3785272474,
                "iconPath": "/common/destiny2_content/icons/c4f6be10eeea9ff396131e9206305376.png",
                "isActive": true,
                "visible": true,
                "displayProperties": {
                    "description": "Может вернуть выстрелы в магазин и открыть временной портал.",
                    "name": "Перемотай еще раз",
                    "icon": "/common/destiny2_content/icons/c4f6be10eeea9ff396131e9206305376.png",
                    "hasIcon": true
                },
                "hash": 3785272474
            },
            {
                "perkHash": 775274301,
                "iconPath": "/common/destiny2_content/icons/c995638d381d6ff46df5606f49abd7b3.png",
                "isActive": true,
                "visible": true,
                "displayProperties": {
                    "description": "Удерживайте спуск, чтобы вести автоматический огонь.",
                    "name": "Система автоспуска",
                    "icon": "/common/destiny2_content/icons/c995638d381d6ff46df5606f49abd7b3.png",
                    "hasIcon": true
                },
                "hash": 775274301
            },
            {
                "perkHash": 2910731959,
                "iconPath": "/common/destiny2_content/icons/00f1212788159cf9f4000e3b51ade290.png",
                "isActive": true,
                "visible": true,
                "displayProperties": {
                    "description": "Снаряды вылетают из временного портала быстрее и чаще.",
                    "name": "Бортовой залп",
                    "icon": "/common/destiny2_content/icons/00f1212788159cf9f4000e3b51ade290.png",
                    "hasIcon": true
                },
                "hash": 2910731959
            }
        ],
        "stats": [
            {
                "statHash": 155624089,
                "value": 60,
                "name": "Стабильность"
            },
            {
                "statHash": 943549884,
                "value": 57,
                "name": "Удобство"
            },
            {
                "statHash": 1240592695,
                "value": 80,
                "name": "Дальность стрельбы"
            },
            {
                "statHash": 1345609583,
                "value": 40,
                "name": "Помощь в прицеливании"
            },
            {
                "statHash": 2714457168,
                "value": 24,
                "name": "Эффективность в воздухе"
            },
            {
                "statHash": 2715839340,
                "value": 73,
                "name": "Отдача"
            },
            {
                "statHash": 3555269338,
                "value": 17,
                "name": "Оптический прицел"
            },
            {
                "statHash": 3871231066,
                "value": 24,
                "name": "Магазин"
            },
            {
                "statHash": 4043523819,
                "value": 33,
                "name": "Урон"
            },
            {
                "statHash": 4188031367,
                "value": 60,
                "name": "Скорость перезарядки"
            },
            {
                "statHash": 4284893193,
                "value": 340,
                "name": "Выстрелов в минуту"
            }
        ],
        "displayProperties": {
            "description": "",
            "name": "Нет времени объяснять",
            "icon": "/common/destiny2_content/icons/b4815d2060876f82559502e67bf9c3e3.jpg",
            "hasIcon": true
        },
        "screenshot": "/common/destiny2_content/screenshots/1594120904.jpg",
        "itemTypeDisplayName": "Импульсная винтовка",
        "hash": 1594120904
    }
   
    const item = getState().items.items.find((value) => value.itemInstanceId === itemInstanceId);
    if (item) {
        return Promise.resolve(item);
    } else {

        if (process.env.NODE_ENV === 'development') {
            return await new Promise((resolve, reject) => {
                setTimeout(() => {
                    //reject('some error');
                    resolve(serverResponseSample);
                }, 1000)
            })
        } else {
            return await fetch(`https://d2lm.ru/api/items/${itemInstanceId}`)
                .then(res => res.json());
        }
        
    }
})

export const { itemRendered } = itemsSlice.actions;
export default itemsSlice.reducer