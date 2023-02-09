import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: "items",
    initialState: {
        items: [],
        status: 'idle',
        error: null,
        currentItemId: null,
        currentItemBgLoaded: false,
    },
    reducers: {
        currentItemRendered: (state, action) => {
            state.currentItemId = action.payload;
        },
        currentItemBecomeChanged: (state, action) => {
            state.status = 'idle';
            state.error = null;
            state.currentItemId = null;
            state.currentItemBgLoaded = false;
        },
        currentItemImgLoaded: (state, action) => {
            state.currentItemBgLoaded = true;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchItemDetails.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchItemDetails.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.status = 'succeeded';
            })
            .addCase(fetchItemDetails.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }

})

export const fetchItemDetails = createAsyncThunk('items/fetchItemDetails', async (itemInstanceId, { getState }) => {

    const serverResponseSample = {
        "characterId": "2305843009604484901",
        "itemHash": 1594120904,
        "itemInstanceId": "6917529823819985541",
        "isEquipped": true,
        "itemLevel": 1582,
        "perks": [
            {
                "perkHash": 3785272474,
                "iconPath": "/common/destiny2_content/icons/c4f6be10eeea9ff396131e9206305376.png",
                "isActive": true,
                "visible": true,
                "displayProperties": {
                    "description": "Can return shots to the magazine and open a time portal.",
                    "name": "Rewind Again",
                    "icon": "/common/destiny2_content/icons/c4f6be10eeea9ff396131e9206305376.png",
                    "hasIcon": true
                },
                "hash": 3785272474
            },
            {
                "perkHash": 2551856714,
                "iconPath": "/common/destiny2_content/icons/5838b4ef410895011edfed3eaf11641f.png",
                "isActive": true,
                "visible": true,
                "displayProperties": {
                    "description": "Each rapid kill with this weapon progressively increases reload speed for a short time.",
                    "name": "Feeding Frenzy",
                    "icon": "/common/destiny2_content/icons/5838b4ef410895011edfed3eaf11641f.png",
                    "hasIcon": true
                },
                "hash": 2551856714
            },
            {
                "perkHash": 2910731959,
                "iconPath": "/common/destiny2_content/icons/00f1212788159cf9f4000e3b51ade290.png",
                "isActive": true,
                "visible": true,
                "displayProperties": {
                    "description": "Projectiles from the time portal shoot more frequently.",
                    "name": "Blast from the Side",
                    "icon": "/common/destiny2_content/icons/00f1212788159cf9f4000e3b51ade290.png",
                    "hasIcon": true
                },
                "hash": 2910731959
            }
        ],
        "stats": [
            {
                "displayProperties": {
                    "name": "Stability"
                },
                "statCategory": 1,
                "hash": 155624089,
                "index": 22,
                "value": 60
            },
            {
                "displayProperties": {
                    "name": "Handling"
                },
                "statCategory": 1,
                "hash": 943549884,
                "index": 26,
                "value": 57
            },
            {
                "displayProperties": {
                    "name": "Range"
                },
                "statCategory": 1,
                "hash": 1240592695,
                "index": 16,
                "value": 80
            },
            {
                "displayProperties": {
                    "name": "Aim Assistance"
                },
                "statCategory": 1,
                "hash": 1345609583,
                "index": 30,
                "value": 40
            },
            {
                "displayProperties": {
                    "name": "Airborne Effectiveness"
                },
                "statCategory": 1,
                "hash": 2714457168,
                "index": 43,
                "value": 24
            },
            {
                "displayProperties": {
                    "name": "Recoil Direction"
                },
                "statCategory": 1,
                "hash": 2715839340,
                "index": 31,
                "value": 73
            },
            {
                "displayProperties": {
                    "name": "Zoom"
                },
                "statCategory": 1,
                "hash": 3555269338,
                "index": 32,
                "value": 17
            },
            {
                "displayProperties": {
                    "name": "Magazine"
                },
                "statCategory": 1,
                "hash": 3871231066,
                "index": 24,
                "value": 24
            },
            {
                "displayProperties": {
                    "name": "Impact"
                },
                "statCategory": 1,
                "hash": 4043523819,
                "index": 15,
                "value": 33
            },
            {
                "displayProperties": {
                    "name": "Reload Speed"
                },
                "statCategory": 1,
                "hash": 4188031367,
                "index": 27,
                "value": 60
            },
            {
                "displayProperties": {
                    "name": "Rounds Per Minute"
                },
                "statCategory": 1,
                "hash": 4284893193,
                "index": 14,
                "value": 340
            }
        ],
        "displayProperties": {
            "description": "",
            "name": "No Time to Explain",
            "icon": "/common/destiny2_content/icons/b4815d2060876f82559502e67bf9c3e3.jpg",
            "hasIcon": true
        },
        "screenshot": "/common/destiny2_content/screenshots/1594120904.jpg",
        "itemTypeDisplayName": "Pulse Rifle",
        "hash": 1594120904
    }

    const item = getState().items.items.find((value) => value.itemInstanceId === itemInstanceId);
    if (item) {
        return await Promise.resolve(item);
    } else {

        const oddStatsHashes = [
            2961396640, //charge time
            3871231066, //magazine
            4284893193, //rounds per minute
            2715839340, //recoil
        ]

        if (process.env.NODE_ENV === 'development') {
            return await new Promise((resolve, reject) => {
                setTimeout(() => {

                    let result = serverResponseSample;

                    let ordinaryStats = result.stats.filter(el => !oddStatsHashes.includes(el.hash))
                        .sort((a, b) => a.index - b.index).map(el => ({ ...el, 'odd': false }));

                    let oddStats = result.stats.filter(el => oddStatsHashes.includes(el.hash))
                        .sort((a, b) => a.index - b.index).map(el => ({ ...el, 'odd': true }));

                    //reject('some error');
                    resolve({ ...result, 'stats': ordinaryStats.concat(oddStats) });
                }, 1000)
            })
        } else {
            let result = await fetch(`https://d2lm.ru/api/items/${itemInstanceId}`)
                .then(res => res.json());

            if (result.error) {
                throw new Error(result.error);
            } else {

                let ordinaryStats = result.stats.filter(el => !oddStatsHashes.includes(el.hash))
                    .sort((a, b) => a.index - b.index).map(el => ({ ...el, 'odd': false }));

                let oddStats = result.stats.filter(el => oddStatsHashes.includes(el.hash))
                    .sort((a, b) => a.index - b.index).map(el => ({ ...el, 'odd': true }));

                return { ...result, 'stats': ordinaryStats.concat(oddStats) };
            }
        }

    }
})

export const { currentItemRendered,
    currentItemImgLoaded,
    currentItemBecomeChanged,
} = itemsSlice.actions;

export const getCurrentItemBgUrl = (state) => {

    if (state.items.currentItemId){
        return state.items.items.find(el => el.itemInstanceId === state.items.currentItemId)?.screenshot;
    } else {
        return null;
    } 
};

export default itemsSlice.reducer