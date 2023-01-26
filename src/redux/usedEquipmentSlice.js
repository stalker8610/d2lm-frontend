import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { characterSelected } from "./userSlice";

const getInitialState = () => {
    return {
        items: [],
        status: 'idle',
        error: null,
    }
}

const equipmentSlice = createSlice({
    name: "usedEquipment",
    initialState: getInitialState(),
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUsedEquipment.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchUsedEquipment.fulfilled, (state, action) => {
                if (action.payload.err) {
                    state.status = 'failed';
                    state.error = action.payload.err;
                } else {
                    state.status = 'succeeded';
                    state.items = [...action.payload];
                }
            })
            .addCase(fetchUsedEquipment.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(characterSelected, () => {
                return getInitialState();
            })
    },
})

export const fetchUsedEquipment = createAsyncThunk('usedEquipment/fetchUsedEquipment', async (args, thunkAPI) => {

    const serverResponseSample = [
        {
            "itemHash": 1594120904,
            "itemInstanceId": "6917529823819985541",
            "location": 1,
            "bucketHash": 1498876634,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "No Time to Explain",
                    "icon": "/common/destiny2_content/icons/b4815d2060876f82559502e67bf9c3e3.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/1594120904.jpg",
                "itemTypeDisplayName": "Pulse Rifle",
                "hash": 1594120904,
                "bucket": {
                    "displayProperties": {
                        "description": "Weapons that deal kinetic damage. Most effective when dealing with unshielded enemies.",
                        "name": "Kinetic Weapons",
                        "hasIcon": false
                    },
                    "bucketOrder": 20,
                    "hash": 1498876634
                }
            }
        },
        {
            "itemHash": 4255586669,
            "itemInstanceId": "6917529844213430884",
            "location": 1,
            "bucketHash": 2465295065,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Empty Vessel",
                    "icon": "/common/destiny2_content/icons/ad6f75a7709744c90de2f300ee8bcf48.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/4255586669.jpg",
                "itemTypeDisplayName": "Grenade Launcher",
                "hash": 4255586669,
                "bucket": {
                    "displayProperties": {
                        "description": "Weapons that deal Arc, Solar, or Void damage. Most effective when dealing with shielded enemies.",
                        "name": "Energy Weapons",
                        "hasIcon": false
                    },
                    "bucketOrder": 30,
                    "hash": 2465295065
                }
            }
        },
        {
            "itemHash": 1911060537,
            "itemInstanceId": "6917529850092180174",
            "location": 1,
            "bucketHash": 953998645,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Taipan-4fr",
                    "icon": "/common/destiny2_content/icons/aed2f3b5aee41bdd307cd66def9c6846.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/1911060537.jpg",
                "itemTypeDisplayName": "Linear Fusion Rifle",
                "hash": 1911060537,
                "bucket": {
                    "displayProperties": {
                        "description": "Machine guns and rocket launchers.",
                        "name": "Power Weapons",
                        "hasIcon": false
                    },
                    "bucketOrder": 40,
                    "hash": 953998645
                }
            }
        },
        {
            "itemHash": 3887272785,
            "itemInstanceId": "6917529247187766970",
            "location": 1,
            "bucketHash": 3448274439,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Wild Hunt Helm",
                    "icon": "/common/destiny2_content/icons/31418ea0659028284c872b9339e7664c.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/3887272785.jpg",
                "itemTypeDisplayName": "Helmet",
                "hash": 3887272785,
                "bucket": {
                    "displayProperties": {
                        "description": "Helmets and hoods.",
                        "name": "Helmet",
                        "hasIcon": false
                    },
                    "bucketOrder": 50,
                    "hash": 3448274439
                }
            }
        },
        {
            "itemHash": 1699964364,
            "itemInstanceId": "6917529826860593586",
            "location": 1,
            "bucketHash": 3551918588,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Dreambane Gauntlets",
                    "icon": "/common/destiny2_content/icons/b75205d4e5d7b54e9e0cb7344f70d336.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/1699964364.jpg",
                "itemTypeDisplayName": "Gauntlets",
                "hash": 1699964364,
                "bucket": {
                    "displayProperties": {
                        "description": "Gloves and gauntlets.",
                        "name": "Gauntlets",
                        "hasIcon": false
                    },
                    "bucketOrder": 60,
                    "hash": 3551918588
                }
            }
        },
        {
            "itemHash": 175015316,
            "itemInstanceId": "6917529825396661323",
            "location": 1,
            "bucketHash": 14239492,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Dreambane Plate",
                    "icon": "/common/destiny2_content/icons/d76cabedcb7e3d568d604df8d77a46c5.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/175015316.jpg",
                "itemTypeDisplayName": "Chest Armor",
                "hash": 175015316,
                "bucket": {
                    "displayProperties": {
                        "description": "Cuirasses, jackets, and vestments.",
                        "name": "Chest Armor",
                        "hasIcon": false
                    },
                    "bucketOrder": 70,
                    "hash": 14239492
                }
            }
        },
        {
            "itemHash": 3539357319,
            "itemInstanceId": "6917529843280963493",
            "location": 1,
            "bucketHash": 20886954,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Peacekeepers",
                    "icon": "/common/destiny2_content/icons/592dc38dd7a785ad28e83236559fc6ea.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/3539357319.jpg",
                "itemTypeDisplayName": "Leg Armor",
                "hash": 3539357319,
                "bucket": {
                    "displayProperties": {
                        "description": "Greaves and leggings.",
                        "name": "Leg Armor",
                        "hasIcon": false
                    },
                    "bucketOrder": 80,
                    "hash": 20886954
                }
            }
        },
        {
            "itemHash": 3968233427,
            "itemInstanceId": "6917529355004909391",
            "location": 1,
            "bucketHash": 1585787867,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Forged Machinist Mark",
                    "icon": "/common/destiny2_content/icons/691719dc98ea24c9c78125c9ab618e58.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/3968233427.jpg",
                "itemTypeDisplayName": "Titan Mark",
                "hash": 3968233427,
                "bucket": {
                    "displayProperties": {
                        "description": "Marks, bonds, and cloaks.",
                        "name": "Class Armor",
                        "hasIcon": false
                    },
                    "bucketOrder": 90,
                    "hash": 1585787867
                }
            }
        },
        {
            "itemHash": 2990668491,
            "itemInstanceId": "6917529846589179373",
            "location": 1,
            "bucketHash": 4023194814,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Festive Shell",
                    "icon": "/common/destiny2_content/icons/1bfe3c17268feedf3c98f51b94010173.jpg",
                    "highResIcon": "/common/destiny2_content/icons/b522b6f50b71ad21e14dad81f91b0ad1.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/2990668491.jpg",
                "itemTypeDisplayName": "Ghost Shell",
                "hash": 2990668491,
                "bucket": {
                    "displayProperties": {
                        "description": "Shells used by your assistant and guide, the Ghost.",
                        "name": "Ghost",
                        "hasIcon": false
                    },
                    "bucketOrder": 45,
                    "hash": 4023194814
                }
            }
        },
        {
            "itemHash": 4252635431,
            "itemInstanceId": "6917529852978122771",
            "location": 1,
            "bucketHash": 2025709351,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Charge of Light",
                    "icon": "/common/destiny2_content/icons/6723b0df7662d91760a10bb193feb0e7.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/4252635431.jpg",
                "itemTypeDisplayName": "Vehicle",
                "hash": 4252635431,
                "bucket": {
                    "displayProperties": {
                        "description": "Surface vehicles at your disposal.",
                        "name": "Vehicle",
                        "hasIcon": false
                    },
                    "bucketOrder": 110,
                    "hash": 2025709351
                }
            }
        },
        {
            "itemHash": 982950671,
            "itemInstanceId": "6917529848645945476",
            "location": 1,
            "bucketHash": 284967655,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Generation's Shadow",
                    "icon": "/common/destiny2_content/icons/da8d546474826d39437a1f5b54e96a21.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/982950671.jpg",
                "itemTypeDisplayName": "Ship",
                "hash": 982950671,
                "bucket": {
                    "displayProperties": {
                        "description": "Spacecraft at your disposal.",
                        "name": "Ships",
                        "hasIcon": false
                    },
                    "bucketOrder": 130,
                    "hash": 284967655
                }
            }
        },
        {
            "itemHash": 2932390016,
            "itemInstanceId": "6917529813243915110",
            "location": 1,
            "bucketHash": 3284755031,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Striker",
                    "icon": "/common/destiny2_content/icons/83c478558665bbadd251d80d3d05bc2e.png",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/2932390016.jpg",
                "itemTypeDisplayName": "Titan Subclass",
                "hash": 2932390016,
                "bucket": {
                    "displayProperties": {
                        "description": "Your abilities.",
                        "name": "Subclass",
                        "hasIcon": false
                    },
                    "bucketOrder": 10,
                    "hash": 3284755031
                }
            }
        },
        {
            "itemHash": 866034303,
            "itemInstanceId": "6917529852965667785",
            "location": 1,
            "bucketHash": 4274335291,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "A Bit of Coin",
                    "icon": "/common/destiny2_content/icons/74189badc6b93019200a4dff342c205d.jpg",
                    "hasIcon": true
                },
                "itemTypeDisplayName": "Emblem",
                "hash": 866034303,
                "bucket": {
                    "displayProperties": {
                        "description": "Emblems to display beside your name in Rosters and friends lists.",
                        "name": "Emblems",
                        "hasIcon": false
                    },
                    "bucketOrder": 150,
                    "hash": 4274335291
                }
            }
        },
        {
            "itemHash": 152583919,
            "itemInstanceId": "6917529159633236541",
            "location": 1,
            "bucketHash": 3683254069,
            "data": {
                "displayProperties": {
                    "description": "When triggered, a random finisher you've marked as a \"favorite\" plays.\n\nIf no finishers are marked as \"favorites,\" your default class finisher plays.",
                    "name": "Finishers",
                    "icon": "/common/destiny2_content/icons/618647e637fceceda9bb5034db87a595.jpg",
                    "hasIcon": true
                },
                "itemTypeDisplayName": "Finisher Collection",
                "hash": 152583919,
                "bucket": {
                    "displayProperties": {
                        "description": "Strike the final blow against a damaged foe with a spectacular flourish.",
                        "name": "Finishers",
                        "hasIcon": false
                    },
                    "bucketOrder": 160,
                    "hash": 3683254069
                }
            }
        },
        {
            "itemHash": 3183180185,
            "itemInstanceId": "6917529159633236540",
            "location": 1,
            "bucketHash": 1107761855,
            "data": {
                "displayProperties": {
                    "description": "Allows for the configuration of equipped emotes from your entire emote collection.",
                    "name": "Emotes",
                    "icon": "/common/destiny2_content/icons/14aa589109bbd9e95df0757b23511b73.jpg",
                    "hasIcon": true
                },
                "itemTypeDisplayName": "Emote Collection",
                "hash": 3183180185
            }
        },
        {
            "itemHash": 1631448645,
            "itemInstanceId": "6917529843808163067",
            "location": 1,
            "bucketHash": 1506418338,
            "data": {
                "displayProperties": {
                    "description": "A custom-built encryption tool for classified communication with the Warmind.",
                    "name": "Seraph Cipher",
                    "icon": "/common/destiny2_content/icons/7b513c9215111507dbf31e3806cc1fcf.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/1631448645.jpg",
                "itemTypeDisplayName": "Artifact",
                "hash": 1631448645,
                "bucket": {
                    "displayProperties": {
                        "description": "Seasonal Artifacts.",
                        "name": "Seasonal Artifact",
                        "hasIcon": false
                    },
                    "bucketOrder": 46,
                    "hash": 1506418338
                }
            }
        }
    ]

    if (process.env.NODE_ENV === 'development') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                /* reject('some error'); */
                resolve(serverResponseSample);
            }, 1000)
        })
    } else {
        const eqData = await fetch(`/api/profile/character/${thunkAPI.getState().user.selectedCharacter}/equipment`).then(res => res.json());
        if (eqData.error){
            throw new Error(eqData.error);
        } else {
            return eqData;
        }
    }

})

export default equipmentSlice.reducer;