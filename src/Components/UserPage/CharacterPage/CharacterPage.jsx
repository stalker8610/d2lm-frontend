import React from "react"
import classes from './CharacterPage.module.css'
import Nav from './CharacterNav/CharacterNav'
import CharacterDetails from "./CharacterDetails/CharacterDetails"


const CharacterPage =  () => {
    return <div className={classes.wrapper}>
        <Nav></Nav>
        <CharacterDetails />
    </div >
}

export default CharacterPage;