import React from "react"
import { Routes, Route } from 'react-router-dom'
import UsedEquipment from './UsedEquipment/UsedEquipment'
import ItemDetails from './Item/ItemDetails/ItemDetails'
import classes from './CharacterDetails.module.css'
/* import Vault from './Vault/Vault'
import FullEquipment from './FullEquipment/FullEquipment'
import Postmaster from "./Postmaster/Postmaster" */

const CharacterDetails = () => {

    return <div className={classes.wrapper}>
        <Routes>
            <Route exact path="/" element={<UsedEquipment />} />
            <Route path="/equipment" element={<UsedEquipment />} />
            <Route exact path="/equipment/item/:itemInstanceId" element={<ItemDetails />} />
            <Route exact path="/equipment/bucket/:bucketHash" element={<FullEquipment />} />
            {/* <Route exact path="/vault" element={<Vault />} />
            <Route exact path="/postmaster" element={<Postmaster />} /> */}
        </Routes>
    </div>
}

export default CharacterDetails