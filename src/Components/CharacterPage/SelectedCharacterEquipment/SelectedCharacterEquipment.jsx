import { useEffect, useState } from 'react'
import classes from './SelectedCharacterEquipment.module.css'
import { Modal } from 'react-bootstrap'
import Item from '../Item/Item'
import ItemDetail from '../Item/ItemDetail/ItemDetail'
import Loading from '../../Loading/Loading'
import FullEquipment from '../FullEquipment/FullEquipment'

const SelectedCharacterEquipment = (props) => {

    let equipSample = [
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
            "itemHash": 3568377122,
            "itemInstanceId": "6917529815815507845",
            "location": 1,
            "bucketHash": 953998645,
            "data": {
                "displayProperties": {
                    "description": "",
                    "name": "ГМ5 «Тайфун»",
                    "icon": "/common/destiny2_content/icons/56a98a88e5c68722366494cc6e1f14b4.jpg",
                    "hasIcon": true
                },
                "itemTypeDisplayName": "Гранатомет",
                "hash": 3568377122,
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
        }]


    const [showItemInstanceId, setShowItemInstanceId] = useState();
    const [showFullEquipmentBucket, setShowFullEquipmentBucket] = useState();

    const [equip, setEquip] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {

        const getEquipment =

            process.env.NODE_ENV === 'development' ?

                async () => {
                    await new Promise((resolve, reject) => {
                        setTimeout(() => {
                            setEquip(equipSample);
                            resolve();
                        }, 1000)
                    })
                }

                :

                async () => {
                    const equip = await fetch(`/api/profile/character/${props.characterId}/equipment`)
                        .then(res => res.json());

                    setEquip(equip);
                }

        getEquipment().then(() => { setLoading(false) });

        console.log('got equipment');

    }, [props.characterId])


    const moveToVault = (item) => {
        /* process.env.NODE_ENV === 'development' ?

                async () => {
                    await new Promise((resolve, reject) => {
                        setTimeout(() => {
                            setEquip(equipSample);
                            resolve();
                        }, 1000)
                    })
                }

                :

                async () => {
                    const equip = await fetch(`/api/profile/character/${props.characterId}/equipment`)
                        .then(res => res.json());

                    setEquip(equip);
                } */
    }


    const renderItem = (item) => {
        return <Item id={item.itemInstanceId} name={item.data.displayProperties.name}
            icon={item.data.displayProperties.icon}
            used={true}
            moveToVault={ () => {moveToVault(item)}}
            showItem={() => { setShowItemInstanceId(item.itemInstanceId) }}
            showFullEquipment={() => { setShowFullEquipmentBucket(item.bucketHash) }} />
    }

    return (
        <div className={classes.wrapper}>

            {isLoading && <Loading />}

            {showItemInstanceId &&
                <Modal dialogClassName={classes.modal} centered show={true} onHide={() => setShowItemInstanceId()}>
                    <ItemDetail itemInstanceId={showItemInstanceId} data={equip.find((el) => el.itemInstanceId === showItemInstanceId)?.data} onClose={() => setShowItemInstanceId()} />
                </Modal>
            }

            {showFullEquipmentBucket &&
                <Modal dialogClassName={classes.modal} centered show={true} onHide={() => setShowFullEquipmentBucket()}>
                    <FullEquipment characterId={props.characterId} bucketHash={showFullEquipmentBucket}
                        bucketName={equip.find((el) => el.bucketHash === showFullEquipmentBucket)?.data.bucket.displayProperties.name}
                        onClose={() => setShowFullEquipmentBucket()} />
                </Modal>
            }

            {!isLoading && equip.length > 0 &&
                <table className={classes.table}>
                    <tbody>
                        <tr>
                            <td> {renderItem(equip[0])} </td>
                            <td> {renderItem(equip[3])} </td>
                        </tr>
                        <tr>
                            <td> {renderItem(equip[1])} </td>
                            <td> {renderItem(equip[4])} </td>
                        </tr>
                        <tr>
                            <td> {renderItem(equip[2])} </td>
                            <td> {renderItem(equip[5])} </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td> {renderItem(equip[6])} </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td> {renderItem(equip[7])} </td>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    )

}

export default SelectedCharacterEquipment