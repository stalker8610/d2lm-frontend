import React from "react"
import { Routes, Route } from 'react-router-dom'
import UsedEquipment from './UsedEquipment/UsedEquipment'
import BucketEquipment from './BucketEquipment/BucketEquipment'
import Postmaster from "./Postmaster/Postmaster"
/* import Vault from './Vault/Vault' */

import classes from './CharacterDetails.module.css'

const CharacterDetails = () => {

    return <div className={classes.characterDetails}>
        <Routes>
            <Route exact path="/" element={<UsedEquipment />} />
            <Route path="/equipment" element={<UsedEquipment />} />
            <Route exact path="/equipment/item/:itemInstanceId" element={<UsedEquipment />} />
            <Route exact path="/equipment/bucket/:bucketHash" element={<BucketEquipment />} />
            <Route exact path="/equipment/bucket/:bucketHash/item/:itemInstanceId" element={<BucketEquipment />} />
            <Route exact path="/postmaster" element={<Postmaster />} />
            {/* <Route exact path="/vault" element={<Vault />} /> */}
        </Routes>
    </div>
}

export default CharacterDetails