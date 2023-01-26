import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { characterSelected } from "./userSlice";

const getInitialState = () => {
    return {
        items: [],
        status: 'idle',
        error: null,
        pullError: null,
    }
}

const postmasterSlice = createSlice({
    name: "postmaster",
    initialState: getInitialState(),
    reducers: {
    },
    extraReducers:
        builder => {
            builder
                .addCase(fetchPostmaster.pending, (state, action) => {
                    state.status = 'loading';
                    state.error = '';
                })
                .addCase(fetchPostmaster.fulfilled, (state, action) => {
                    state.status = 'succeeded';
                    state.error = '';
                    state.items = [...action.payload]
                })
                .addCase(fetchPostmaster.rejected, (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message;
                })
                .addCase(characterSelected, (state, action) => {
                    return getInitialState();
                })
                .addCase(pullFromPostmaster.pending, (state, action) => {
                    state.status = 'loading';
                    state.pullError = '';
                })
                .addCase(pullFromPostmaster.fulfilled, (state, action) => {

                    state.status = 'succeeded';
                    state.pullError = '';

                    const itemData = state.items.find(item => item.itemHash === action.payload.itemHash
                        && item.itemInstanceId === action.payload.itemInstanceId);

                    if (itemData?.quantity > 1) {
                        itemData.quantity--
                    } else {
                        state.items = state.items.filter(item =>
                            !(item.itemHash === action.payload.itemHash
                                && item.itemInstanceId === action.payload.itemInstanceId));
                    }

                })
                .addCase(pullFromPostmaster.rejected, (state, action) => {
                    state.status = 'failed';
                    state.pullError = action.error.message;
                })
        }
})

export const fetchPostmaster = createAsyncThunk("postmaster/fetch", async (_, thunkAPI) => {
    const serverResponseSample =
        [
            {
                "itemHash": 2979281381,
                "location": 1,
                "bucketHash": 215593132,
                "quantity": 3,
                "data": {
                    "displayProperties": {
                        "description": "A collection of universal components that can be used to infuse power between gear items. Can be purchased from the Gunsmith or acquired from special reward sources.",
                        "name": "Upgrade Module",
                        "icon": "/common/destiny2_content/icons/62b016b25d8589f2b15c38890d2b24c3.jpg",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Material",
                    "hash": 2979281381
                }
            },
            {
                "itemHash": 3309706454,
                "itemInstanceId": "6917529848686461758",
                "location": 1,
                "bucketHash": 215593132,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "A mysterious engram containing a wide variety of Legendary gear. Its contents are susceptible to influence. Rahool in the Tower can decrypt its basic form, but vendors in the H.E.L.M. can unlock its deeper secrets.",
                        "name": "Umbral Engram",
                        "icon": "/common/destiny2_content/icons/b5ef9d68636d142b3f05628a2e7947a8.png",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Umbral Engram",
                    "hash": 3309706454
                }
            },
            {
                "itemHash": 616392721,
                "location": 1,
                "bucketHash": 215593132,
                "quantity": 15,
                "data": {
                    "displayProperties": {
                        "description": "An odd key earned by completing the Dares of Eternity.\n\nCan be used to open a chest in Xûr's Treasure Hoard.",
                        "name": "Treasure Key",
                        "icon": "/common/destiny2_content/icons/19e18318ad8a94792456d4f2a3ef8fef.jpg",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Redeemable",
                    "hash": 616392721
                }
            },
            {
                "itemHash": 3309706454,
                "itemInstanceId": "6917529848752151403",
                "location": 1,
                "bucketHash": 215593132,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "A mysterious engram containing a wide variety of Legendary gear. Its contents are susceptible to influence. Rahool in the Tower can decrypt its basic form, but vendors in the H.E.L.M. can unlock its deeper secrets.",
                        "name": "Umbral Engram",
                        "icon": "/common/destiny2_content/icons/b5ef9d68636d142b3f05628a2e7947a8.png",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Umbral Engram",
                    "hash": 3309706454
                }
            },
            {
                "itemHash": 3309706454,
                "itemInstanceId": "6917529846952642648",
                "location": 1,
                "bucketHash": 215593132,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "A mysterious engram containing a wide variety of Legendary gear. Its contents are susceptible to influence. Rahool in the Tower can decrypt its basic form, but vendors in the H.E.L.M. can unlock its deeper secrets.",
                        "name": "Umbral Engram",
                        "icon": "/common/destiny2_content/icons/b5ef9d68636d142b3f05628a2e7947a8.png",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Umbral Engram",
                    "hash": 3309706454
                }
            },
            {
                "itemHash": 834753572,
                "itemInstanceId": "6917529848786204206",
                "location": 1,
                "bucketHash": 215593132,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "An engram with complex markers.\n\nContains a random Legendary Crucible weapon or armor piece.",
                        "name": "Crucible Gear",
                        "icon": "/common/destiny2_content/icons/f79c5655e9e2771cdda9bdd829997f9c.png",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Engram",
                    "hash": 834753572
                }
            },
            {
                "itemHash": 834753572,
                "itemInstanceId": "6917529848786203886",
                "location": 1,
                "bucketHash": 215593132,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "An engram with complex markers.\n\nContains a random Legendary Crucible weapon or armor piece.",
                        "name": "Crucible Gear",
                        "icon": "/common/destiny2_content/icons/f79c5655e9e2771cdda9bdd829997f9c.png",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Engram",
                    "hash": 834753572
                }
            },
            {
                "itemHash": 3309706454,
                "itemInstanceId": "6917529848711769051",
                "location": 1,
                "bucketHash": 215593132,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "A mysterious engram containing a wide variety of Legendary gear. Its contents are susceptible to influence. Rahool in the Tower can decrypt its basic form, but vendors in the H.E.L.M. can unlock its deeper secrets.",
                        "name": "Umbral Engram",
                        "icon": "/common/destiny2_content/icons/b5ef9d68636d142b3f05628a2e7947a8.png",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Umbral Engram",
                    "hash": 3309706454
                }
            },
            {
                "itemHash": 3309706454,
                "itemInstanceId": "6917529846974160995",
                "location": 1,
                "bucketHash": 215593132,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "A mysterious engram containing a wide variety of Legendary gear. Its contents are susceptible to influence. Rahool in the Tower can decrypt its basic form, but vendors in the H.E.L.M. can unlock its deeper secrets.",
                        "name": "Umbral Engram",
                        "icon": "/common/destiny2_content/icons/b5ef9d68636d142b3f05628a2e7947a8.png",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Umbral Engram",
                    "hash": 3309706454
                }
            },
            {
                "itemHash": 3875551374,
                "itemInstanceId": "6917529848793726899",
                "location": 1,
                "bucketHash": 215593132,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "An engram with a predestined outcome.\n\nContains a new Exotic if any of the possible rewards remain to be collected. Preview contents for possible rewards.",
                        "name": "Exotic Engram",
                        "icon": "/common/destiny2_content/icons/ee21b5bc72f9e48366c9addff163a187.png",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Engram",
                    "hash": 3875551374
                }
            },
            {
                "itemHash": 2978226043,
                "itemInstanceId": "6917529848718064340",
                "location": 1,
                "bucketHash": 215593132,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "",
                        "name": "Judgment of Kelgorath",
                        "icon": "/common/destiny2_content/icons/2624ebd3a3864de0e70670e39980b31b.jpg",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Glaive",
                    "hash": 2978226043
                }
            },
            {
                "itemHash": 3309706454,
                "itemInstanceId": "6917529847879283938",
                "location": 1,
                "bucketHash": 215593132,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "A mysterious engram containing a wide variety of Legendary gear. Its contents are susceptible to influence. Rahool in the Tower can decrypt its basic form, but vendors in the H.E.L.M. can unlock its deeper secrets.",
                        "name": "Umbral Engram",
                        "icon": "/common/destiny2_content/icons/b5ef9d68636d142b3f05628a2e7947a8.png",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Umbral Engram",
                    "hash": 3309706454
                }
            },
            {
                "itemHash": 3438103366,
                "itemInstanceId": "6917529848786204456",
                "location": 1,
                "bucketHash": 215593132,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "",
                        "name": "Black Shield Mark",
                        "icon": "/common/destiny2_content/icons/d6a6b59b92d0506dfe1df4b389b0b236.jpg",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Titan Mark",
                    "hash": 3438103366
                }
            },
            {
                "itemHash": 3309706454,
                "itemInstanceId": "6917529848793728902",
                "location": 1,
                "bucketHash": 215593132,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "A mysterious engram containing a wide variety of Legendary gear. Its contents are susceptible to influence. Rahool in the Tower can decrypt its basic form, but vendors in the H.E.L.M. can unlock its deeper secrets.",
                        "name": "Umbral Engram",
                        "icon": "/common/destiny2_content/icons/b5ef9d68636d142b3f05628a2e7947a8.png",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Umbral Engram",
                    "hash": 3309706454
                }
            },
            {
                "itemHash": 3309706454,
                "itemInstanceId": "6917529848725834569",
                "location": 1,
                "bucketHash": 215593132,
                "quantity": 1,
                "data": {
                    "displayProperties": {
                        "description": "A mysterious engram containing a wide variety of Legendary gear. Its contents are susceptible to influence. Rahool in the Tower can decrypt its basic form, but vendors in the H.E.L.M. can unlock its deeper secrets.",
                        "name": "Umbral Engram",
                        "icon": "/common/destiny2_content/icons/b5ef9d68636d142b3f05628a2e7947a8.png",
                        "hasIcon": true
                    },
                    "itemTypeDisplayName": "Umbral Engram",
                    "hash": 3309706454
                }
            }
        ];

    if (process.env.NODE_ENV === 'development') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //reject('some error');
                resolve(serverResponseSample);
            }, 1000)
        })
    } else {

        let result = await fetch(`/api/profile/character/${thunkAPI.getState().user.selectedCharacter}/postmaster`).then(res => res.json());

        if (result.error) {
            throw new Error(result.error);
        } else {
            return result;
        }

    }
})

export const pullFromPostmaster = createAsyncThunk("postmaster/pull", async ({ itemHash, itemInstanceId }, thunkAPI) => {
    const serverResponseSample = { itemHash, itemInstanceId };

    if (process.env.NODE_ENV === 'development') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //reject('no free space in target bucket');
                resolve(serverResponseSample);
            }, 1000)
        })
    } else {
        let result = await fetch(`/api/profile/character/${thunkAPI.getState().user.selectedCharacter}/postmaster/take`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ itemHash, itemInstanceId })
            })
            .then(res => res.json());

        if (result.error) {
            throw new Error(result.error);
        } else {
            return { ...result, itemHash, itemInstanceId };
        }

    }
})

export default postmasterSlice.reducer;