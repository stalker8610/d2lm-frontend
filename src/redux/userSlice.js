import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState:
    {
        data: null,
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
        selectedCharacter: null,
    },
    reducers: {
        characterSelected: (state, action) => {
            state.selectedCharacter = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                if (action.payload) {
                    state.data = action.payload;
                    const characters = action.payload.characters.sort((ch1, ch2)=>ch2.light-ch1.light);
                    state.selectedCharacter = characters.length ? characters[0].id : null;
                }
                state.status = 'success';
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = 'failed';
            })
    },
});

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {

    const serverResponseSample = {
        "main": {
            "bungieMembershipId": "20909061",
            "name": "Partizan",
            "imgPath": "/img/profile/avatars/d221_1.jpg"
        },
        "storeMembership": {
            "storeMembershipType": 3,
            "storeMembershipId": "4611686018487196498"
        },
        "characters": [
            {
                "id": "2305843009434704222",
                "classType": 1,
                "light": 1596,
                "emblemPath": "/common/destiny2_content/icons/cb75fe0f22015ba50953ec3a0700d07a.jpg",
                "emblemBackgroundPath": "/common/destiny2_content/icons/82982ff7e0536b5260dda5182caa9637.jpg",
                "raceType": 1
            },
            {
                "id": "2305843009494054401",
                "classType": 2,
                "light": 1366,
                "emblemPath": "/common/destiny2_content/icons/24e9133c9cc157853762de5a2c3853aa.jpg",
                "emblemBackgroundPath": "/common/destiny2_content/icons/73f5f779f40bfecb4690c395bc1941b9.jpg",
                "raceType": 2
            },
            {
                "id": "2305843009604484901",
                "classType": 0,
                "light": 1599,
                "emblemPath": "/common/destiny2_content/icons/74189badc6b93019200a4dff342c205d.jpg",
                "emblemBackgroundPath": "/common/destiny2_content/icons/d414390aaadcddea26fa4ce6ba639a12.jpg",
                "raceType": 0
            }
        ]
    }

    let userData = null;

    if (process.env.NODE_ENV === 'development') {
        userData = await new Promise((resolve, reject) => {
            setTimeout(() => {
                /* reject(new Error('some error happened')); */
                resolve(serverResponseSample)
            }, 1500)
        })
    } else {
        const { isAuthorized } = await fetch('https://d2lm.ru/auth/isAuthorized').then(response => response.json());
        if (isAuthorized) {
            userData = await fetch('https://d2lm.ru/api/profile/').then(response => response.json());
            if (userData.error) {
                throw new Error(userData.error);
            }
        }
    }

    return userData ? { ...userData, characters: userData.characters.sort((ch1, ch2) => ch2.light - ch1.light) } : null;

})

export const { characterSelected } = userSlice.actions;

export default userSlice.reducer;