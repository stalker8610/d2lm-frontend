import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { characterSelected } from "./userSlice";

const getInitialState = () => {
    return {
        items: [],
        bucketDescription: null,
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
                state.items = [...action.payload.items];
                state.bucketDescription = action.payload.bucketDisplayProperties;
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

    const serverResponseSample = {
        "items": [
            {
                "itemHash": 1473821207,
                "itemInstanceId": "6917529852713401791",
                "location": 1,
                "bucketHash": 1498876634,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "",
                        "name": "Revision Zero",
                        "icon": "/common/destiny2_content/icons/3bf81dd785826e06f190ab1f7d9b27a0.jpg",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Pulse Rifle",
                    "hash": 1473821207
                }
            },
            {
                "itemHash": 882778888,
                "itemInstanceId": "6917529859349644971",
                "location": 1,
                "bucketHash": 1498876634,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "",
                        "name": "Rose",
                        "icon": "/common/destiny2_content/icons/ee1994e1724c99306a8cd98a16b48d41.jpg",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Hand Cannon",
                    "hash": 882778888
                }
            },
            {
                "itemHash": 882778888,
                "itemInstanceId": "6917529860022320938",
                "location": 1,
                "bucketHash": 1498876634,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "",
                        "name": "Rose",
                        "icon": "/common/destiny2_content/icons/ee1994e1724c99306a8cd98a16b48d41.jpg",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Hand Cannon",
                    "hash": 882778888
                }
            },
            {
                "itemHash": 3849810018,
                "itemInstanceId": "6917529849244212097",
                "location": 1,
                "bucketHash": 1498876634,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "",
                        "name": "Pardon Our Dust",
                        "icon": "/common/destiny2_content/icons/eb72e934debaa543d03a38e210a56b45.jpg",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Grenade Launcher",
                    "hash": 3849810018
                }
            },
            {
                "itemHash": 1509167284,
                "itemInstanceId": "6917529844447977433",
                "location": 1,
                "bucketHash": 1498876634,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "",
                        "name": "Blood Feud",
                        "icon": "/common/destiny2_content/icons/622276a6966fa84c3aa1d30543022ccb.jpg",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Submachine Gun",
                    "hash": 1509167284
                }
            },
            {
                "itemHash": 4070357005,
                "itemInstanceId": "6917529846493756778",
                "location": 1,
                "bucketHash": 1498876634,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "",
                        "name": "Seventh Seraph Carbine",
                        "icon": "/common/destiny2_content/icons/6dc41476bdb6ffbb6ab7a8bce24f9216.jpg",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Auto Rifle",
                    "hash": 4070357005
                }
            },
            {
                "itemHash": 204878059,
                "itemInstanceId": "6917529854147326841",
                "location": 1,
                "bucketHash": 1498876634,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "",
                        "name": "Malfeasance",
                        "icon": "/common/destiny2_content/icons/0c2816822b0a1787157f1e90d3bd057c.jpg",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Hand Cannon",
                    "hash": 204878059
                }
            },
            {
                "itemHash": 1594120904,
                "itemInstanceId": "6917529823819985541",
                "location": 1,
                "bucketHash": 1498876634,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "",
                        "name": "No Time to Explain",
                        "icon": "/common/destiny2_content/icons/b4815d2060876f82559502e67bf9c3e3.jpg",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Pulse Rifle",
                    "hash": 1594120904
                }
            }
        ],
        "bucketDisplayProperties": {
            "description": "Weapons that deal kinetic damage. Most effective when dealing with unshielded enemies.",
            "name": "Kinetic Weapons",
            "hasIcon": false
        }
    }

    if (process.env.NODE_ENV === 'development') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                /* reject('some error'); */
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