import React from "react"
import { Routes, Route } from 'react-router-dom'
import UsedEquipment from './UsedEquipment/UsedEquipment'
import ItemDetails from './Item/ItemDetails/ItemDetails'
import BucketEquipment from './BucketEquipment/BucketEquipment'
import Postmaster from "./Postmaster/Postmaster"
/* import Vault from './Vault/Vault' */
 

const CharacterDetails = () => {

    return <div>
        <Routes>
            <Route exact path="/" element={<UsedEquipment />} />
            <Route path="/equipment" element={<UsedEquipment />} />
            <Route exact path="/equipment/item/:itemInstanceId" element={<ItemDetails />} />
            <Route exact path="/equipment/bucket/:bucketHash" element={<BucketEquipment />} />
            <Route exact path="/postmaster" element={<Postmaster />} />
            {/* <Route exact path="/vault" element={<Vault />} /> */}
        </Routes>
    </div>
}

export default CharacterDetails