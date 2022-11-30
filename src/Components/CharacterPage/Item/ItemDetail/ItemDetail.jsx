import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Modal, Button, Form, Image } from 'react-bootstrap'

const imgLoading = require('../../../../assets/loading.gif');

const ItemDetail = (props) => {

    const itemSample = {
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
                "value": 45,
                "name": "Помощь в прицеливании"
            },
            {
                "statHash": 2714457168,
                "value": 24,
                "name": "Эффективность в воздухе"
            },
            {
                "statHash": 2715839340,
                "value": 90,
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
        ]
    }

    const [isLoading, setLoading] = useState(false);
    const [itemData, setData] = useState(null);

    useEffect(() => {

        const loadData = (process.env.NODE_ENV === 'development') ?

            async () => {
                await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        setData(itemSample);
                        resolve();
                    }, 1000)
                })
            }

            :

            async () => {
                const res = await fetch(`api/items/${props.itemInstanceId}`).then(res => res.json());
                setData(res);
            };

        setLoading(true);
        loadData().then(() => { setLoading(false) });

    }, [props.itemInstanceId]);


    const Stat = (props) => {
        return <div>
            <span> {props.name}</span>
            <span> {props.value}</span>
        </div>
    }

    return <div>
        <Modal.Header closeButton>
            <Modal.Title>
                <div> {props.data.displayProperties.name} </div>
                <Form.Text muted> {props.data.itemTypeDisplayName} </Form.Text>
            </Modal.Title>

        </Modal.Header>

        {isLoading && <Image fluid src={imgLoading}/>}

        {!isLoading &&
            <Modal.Body>
                {itemData?.stats.map((el) => <Stat key={el.statHash} name={el.name} value={el.value} />)}
            </Modal.Body>
        }



        <Modal.Footer>
            <Button variant="primary" onClick={props.onClose}>
                Close
            </Button>
        </Modal.Footer>
    </div>
}

export default ItemDetail