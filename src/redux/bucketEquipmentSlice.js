import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { characterSelected } from "./userSlice";

const getInitialState = () => {
    return {
        items: [],
        status: 'idle',
        error: null,
    }
}

const bucketEquipmentSlice = createSlice({
    name: "bucketEquipment",
    initialState: getInitialState(),
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(fetchBucketEquipment.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(fetchBucketEquipment.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = '';
                state.items = [...action.payload];
            })
            .addCase(fetchBucketEquipment.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(characterSelected, () => {
                return getInitialState();
            })
    },
})

export const fetchBucketEquipment = createAsyncThunk('bucketEquipment/fetchBucketEquipment', async (bucketHash, { getState }) => {

    const serverResponseSample = [
        {
            "itemHash": 3055790362,
            "itemInstanceId": "6917529761161902212",
            "location": 1,
            "bucketHash": 1498876634,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Сокольничий",
                    "icon": "/common/destiny2_content/icons/b5bfafe4c2defb3b4b190803a79513da.jpg",
                    "hasIcon": true
                },
                "itemTypeDisplayName": "Револьвер",
                "hash": 3055790362
            }
        },
        {
            "itemHash": 2856514843,
            "itemInstanceId": "6917529815808307515",
            "location": 1,
            "bucketHash": 1498876634,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Синкопа-53",
                    "icon": "/common/destiny2_content/icons/10a4ea85e9f4498d9850b073b660c4ec.jpg",
                    "hasIcon": true
                },
                "itemTypeDisplayName": "Импульсная винтовка",
                "hash": 2856514843
            }
        },
        {
            "itemHash": 4100775158,
            "itemInstanceId": "6917529815828706302",
            "location": 1,
            "bucketHash": 1498876634,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Пиццикато-22",
                    "icon": "/common/destiny2_content/icons/26c42c46b900488d918382e939cf5006.jpg",
                    "hasIcon": true
                },
                "itemTypeDisplayName": "Пистолет-пулемет",
                "hash": 4100775158
            }
        },
        {
            "itemHash": 829330711,
            "itemInstanceId": "6917529774479068672",
            "location": 1,
            "bucketHash": 1498876634,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Узы мира",
                    "icon": "/common/destiny2_content/icons/067eefdf127c32b4ffd4724be408fdb2.jpg",
                    "hasIcon": true
                },
                "itemTypeDisplayName": "Пистолет",
                "hash": 829330711
            }
        },
        {
            "itemHash": 2907129556,
            "itemInstanceId": "6917529798311802097",
            "location": 1,
            "bucketHash": 1498876634,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Буря",
                    "icon": "/common/destiny2_content/icons/1d3733c665f01b4adea1c5f65558ddde.jpg",
                    "hasIcon": true
                },
                "itemTypeDisplayName": "Револьвер",
                "hash": 2907129556
            }
        },
        {
            "itemHash": 3413860062,
            "itemInstanceId": "6917529529470811540",
            "location": 1,
            "bucketHash": 1498876634,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Компаньон",
                    "icon": "/common/destiny2_content/icons/c5fb814d409f1c0a47e89c5062e2182b.jpg",
                    "hasIcon": true
                },
                "itemTypeDisplayName": "Дробовик",
                "hash": 3413860062
            }
        },
        {
            "itemHash": 3973202132,
            "itemInstanceId": "6917529774718843175",
            "location": 1,
            "bucketHash": 1498876634,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Шип",
                    "icon": "/common/destiny2_content/icons/ba392591a98adb436d5f34db5af635c1.jpg",
                    "hasIcon": true
                },
                "itemTypeDisplayName": "Револьвер",
                "hash": 3973202132
            }
        },
        {
            "itemHash": 3184681056,
            "itemInstanceId": "6917529511425075616",
            "location": 1,
            "bucketHash": 1498876634,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Разметист",
                    "icon": "/common/destiny2_content/icons/a490a0c7deef34f14fbae4959a578f9e.jpg",
                    "hasIcon": true
                },
                "itemTypeDisplayName": "Дробовик",
                "hash": 3184681056
            }
        }
    ]

    if (process.env.NODE_ENV === 'development') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //reject('some error');
                resolve(serverResponseSample);
            }, 1000)
        })
    } else {
        let result = fetch(`/api/profile/character/${getState().user.selectedCharacter}/equipment/bucket/${bucketHash}`)
            .then(res => res.json());

        if (result.error) {
            throw new Error(result.error);
        } else {
            return result;
        }
    }

})

export default bucketEquipmentSlice.reducer;