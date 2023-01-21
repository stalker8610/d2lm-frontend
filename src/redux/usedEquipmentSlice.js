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
                state.status = 'succeeded';
                state.items = [...action.payload];
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
            "itemInstanceId": "6917529790419947213",
            "location": 1,
            "bucketHash": 1498876634,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Нет времени объяснять",
                    "icon": "/common/destiny2_content/icons/b4815d2060876f82559502e67bf9c3e3.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/1594120904.jpg",
                "itemTypeDisplayName": "Импульсная винтовка",
                "hash": 1594120904,
                "bucket": {
                    "displayProperties": {
                        "description": "Оружие, наносящее кинетический урон. Эффективно против врагов без щитов.",
                        "name": "Кинетическое оружие",
                        "hasIcon": false
                    },
                    "bucketOrder": 20,
                    "hash": 1498876634
                }
            }
        },
        {
            "itemHash": 3473290087,
            "itemInstanceId": "6917529696382866863",
            "location": 1,
            "bucketHash": 2465295065,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Замороженная орбита",
                    "icon": "/common/destiny2_content/icons/9bca64e4672251a90f580b1881461550.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/3473290087.jpg",
                "itemTypeDisplayName": "Снайперская винтовка",
                "hash": 3473290087,
                "bucket": {
                    "displayProperties": {
                        "description": "Оружие, наносящее урон с помощью энергии Молнии, Солнца или Пустоты. Эффективно против врагов с щитами.",
                        "name": "Энергетическое оружие",
                        "hasIcon": false
                    },
                    "bucketOrder": 30,
                    "hash": 2465295065
                }
            }
        },
        {
            "itemHash": 3257091166,
            "itemInstanceId": "6917529796592194004",
            "location": 1,
            "bucketHash": 953998645,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Полуправда",
                    "icon": "/common/destiny2_content/icons/ddb15379c4cb8c9e05758a108b8eb20d.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/3257091166.jpg",
                "itemTypeDisplayName": "Меч",
                "hash": 3257091166,
                "bucket": {
                    "displayProperties": {
                        "description": "Пулеметы и ракетные установки.",
                        "name": "Силовое оружие",
                        "hasIcon": false
                    },
                    "bucketOrder": 40,
                    "hash": 953998645
                }
            }
        },
        {
            "itemHash": 3562696927,
            "itemInstanceId": "6917529147081090630",
            "location": 1,
            "bucketHash": 3448274439,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Корона червеоболочки",
                    "icon": "/common/destiny2_content/icons/95eb480d723f510afd9fd3e2bbb1d92d.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/3562696927.jpg",
                "itemTypeDisplayName": "Шлем",
                "hash": 3562696927,
                "bucket": {
                    "displayProperties": {
                        "description": "Шлемы и капюшоны.",
                        "name": "Шлем",
                        "hasIcon": false
                    },
                    "bucketOrder": 50,
                    "hash": 3448274439
                }
            }
        },
        {
            "itemHash": 3479737253,
            "itemInstanceId": "6917529367544394505",
            "location": 1,
            "bucketHash": 3551918588,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Обмотка Детей Света",
                    "icon": "/common/destiny2_content/icons/f9a93f1036c62814c97ac873968d5450.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/3479737253.jpg",
                "itemTypeDisplayName": "Рукавицы",
                "hash": 3479737253,
                "bucket": {
                    "displayProperties": {
                        "description": "Перчатки и рукавицы.",
                        "name": "Рукавицы",
                        "hasIcon": false
                    },
                    "bucketOrder": 60,
                    "hash": 3551918588
                }
            }
        },
        {
            "itemHash": 863163983,
            "itemInstanceId": "6917529387238895583",
            "location": 1,
            "bucketHash": 14239492,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Жилет «Железная дань»",
                    "icon": "/common/destiny2_content/icons/7071d5343d0a1c3ab37af03a981fffa9.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/863163983.jpg",
                "itemTypeDisplayName": "Нагрудник",
                "hash": 863163983,
                "bucket": {
                    "displayProperties": {
                        "description": "Кирасы, куртки и жилеты.",
                        "name": "Нагрудник",
                        "hasIcon": false
                    },
                    "bucketOrder": 70,
                    "hash": 14239492
                }
            }
        },
        {
            "itemHash": 3827066919,
            "itemInstanceId": "6917529434466939673",
            "location": 1,
            "bucketHash": 20886954,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Штаны Детей Света",
                    "icon": "/common/destiny2_content/icons/9d4c9d432082d8baa760f2d4b6720932.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/3827066919.jpg",
                "itemTypeDisplayName": "Броня для ног",
                "hash": 3827066919,
                "bucket": {
                    "displayProperties": {
                        "description": "Поножи и штаны.",
                        "name": "Броня для ног",
                        "hasIcon": false
                    },
                    "bucketOrder": 80,
                    "hash": 20886954
                }
            }
        },
        {
            "itemHash": 223597399,
            "itemInstanceId": "6917529739893028748",
            "location": 1,
            "bucketHash": 1585787867,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Плащ медалистов",
                    "icon": "/common/destiny2_content/icons/f8cb09efa9ed6936e3c1abed8811724d.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/223597399.jpg",
                "itemTypeDisplayName": "Плащ охотника",
                "hash": 223597399,
                "bucket": {
                    "displayProperties": {
                        "description": "Метки, повязки и плащи.",
                        "name": "Классовое снаряжение",
                        "hasIcon": false
                    },
                    "bucketOrder": 90,
                    "hash": 1585787867
                }
            }
        },
        {
            "itemHash": 732682038,
            "itemInstanceId": "6917529518617892753",
            "location": 1,
            "bucketHash": 4023194814,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Оболочка «Ушастый комочек»",
                    "icon": "/common/destiny2_content/icons/7f92167c65d3d712661cc4bd73dc82a2.jpg",
                    "highResIcon": "/common/destiny2_content/icons/3e219846a8121c430df17c835f7b73df.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/732682038.jpg",
                "itemTypeDisplayName": "Оболочка призрака",
                "hash": 732682038,
                "bucket": {
                    "displayProperties": {
                        "description": "Оболочки, которые использует призрак — ваш ассистент и проводник.",
                        "name": "Призрак",
                        "hasIcon": false
                    },
                    "bucketOrder": 45,
                    "hash": 4023194814
                }
            }
        },
        {
            "itemHash": 2832223387,
            "itemInstanceId": "6917529495284713656",
            "location": 1,
            "bucketHash": 2025709351,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Вечное возвращение",
                    "icon": "/common/destiny2_content/icons/8755650bb2b60e7cbed9b681eae98001.jpg",
                    "highResIcon": "/common/destiny2_content/icons/82e87ed59cde8f83df5a772b3bea8c50.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/2832223387.jpg",
                "itemTypeDisplayName": "Техника",
                "hash": 2832223387,
                "bucket": {
                    "displayProperties": {
                        "description": "Наземная техника, которая находится в вашем распоряжении.",
                        "name": "Техника",
                        "hasIcon": false
                    },
                    "bucketOrder": 110,
                    "hash": 2025709351
                }
            }
        },
        {
            "itemHash": 489224274,
            "itemInstanceId": "6917529797987489094",
            "location": 1,
            "bucketHash": 284967655,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Пожарный дозорный",
                    "icon": "/common/destiny2_content/icons/95adde857213e07d2a43c3800b1efe14.jpg",
                    "highResIcon": "/common/destiny2_content/icons/7628e8a945a40405d80ccc0b5e63e8cc.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/489224274.jpg",
                "itemTypeDisplayName": "Корабль",
                "hash": 489224274,
                "bucket": {
                    "displayProperties": {
                        "description": "Космические корабли, которые находятся в вашем распоряжении.",
                        "name": "Корабли",
                        "hasIcon": false
                    },
                    "bucketOrder": 130,
                    "hash": 284967655
                }
            }
        },
        {
            "itemHash": 2240888816,
            "itemInstanceId": "6917529760422704785",
            "location": 1,
            "bucketHash": 3284755031,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Стрелок",
                    "icon": "/common/destiny2_content/icons/fedcb91b7ab0584c12f0e9fec730702b.png",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/2240888816.jpg",
                "itemTypeDisplayName": "Подкласс охотника",
                "hash": 2240888816,
                "bucket": {
                    "displayProperties": {
                        "description": "Ваши способности.",
                        "name": "Подкласс",
                        "hasIcon": false
                    },
                    "bucketOrder": 10,
                    "hash": 3284755031
                }
            }
        },
        {
            "itemHash": 185321779,
            "itemInstanceId": "6917529434490877945",
            "location": 1,
            "bucketHash": 4274335291,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "Девятка",
                    "icon": "/common/destiny2_content/icons/cb75fe0f22015ba50953ec3a0700d07a.jpg",
                    "hasIcon": true
                },
                "itemTypeDisplayName": "Эмблема",
                "hash": 185321779,
                "bucket": {
                    "displayProperties": {
                        "description": "Эмблемы, которые будут видны рядом с вашим именем в различных списках.",
                        "name": "Эмблемы",
                        "hasIcon": false
                    },
                    "bucketOrder": 150,
                    "hash": 4274335291
                }
            }
        },
        {
            "itemHash": 152583919,
            "itemInstanceId": "6917529138647563498",
            "location": 1,
            "bucketHash": 3683254069,
            "data": {
                "displayProperties": {
                    "description": "При активации выполняется один из добивающих приемов, которые вы добавили в избранное.\n\nЕсли таких нет, добивающий прием выбирается случайным образом из вашей коллекции.",
                    "name": "Добивающие приемы",
                    "icon": "/common/destiny2_content/icons/618647e637fceceda9bb5034db87a595.jpg",
                    "hasIcon": true
                },
                "itemTypeDisplayName": "Коллекция добивающих приемов",
                "hash": 152583919,
                "bucket": {
                    "displayProperties": {
                        "description": "Поразите раненого врага эффектным добивающим попаданием.",
                        "name": "Добивающие приемы",
                        "hasIcon": false
                    },
                    "bucketOrder": 160,
                    "hash": 3683254069
                }
            }
        },
        {
            "itemHash": 3183180185,
            "itemInstanceId": "6917529089029981394",
            "location": 1,
            "bucketHash": 1107761855,
            "data": {
                "displayProperties": {
                    "description": "Настройка и выбор жестов из коллекции.",
                    "name": "Жесты",
                    "icon": "/common/destiny2_content/icons/14aa589109bbd9e95df0757b23511b73.jpg",
                    "hasIcon": true
                },
                "itemTypeDisplayName": "Коллекция жестов",
                "hash": 3183180185
            }
        },
        {
            "itemHash": 2871264750,
            "itemInstanceId": "6917529815512159800",
            "location": 1,
            "bucketHash": 1506418338,
            "data": {
                "displayProperties": {
                    "description": "Главный инструмент космических странников эликсни, открывающий множество дверей.",
                    "name": "Универсальный ключ",
                    "icon": "/common/destiny2_content/icons/b1fe56d925a2ffc41d23e4c2ac5bdbb3.jpg",
                    "hasIcon": true
                },
                "screenshot": "/common/destiny2_content/screenshots/2871264750.jpg",
                "itemTypeDisplayName": "Артефакт",
                "hash": 2871264750,
                "bucket": {
                    "displayProperties": {
                        "description": "Сезонные артефакты.",
                        "name": "Сезонный артефакт",
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
                //reject('some error');
                resolve(serverResponseSample);
            }, 1000)
        })
    } else {
        return fetch(`/api/profile/character/${thunkAPI.getState().user.selectedCharacter}/equipment`)
            .then(res => res.json());
    }

})

export default equipmentSlice.reducer;