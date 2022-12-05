import React from "react"
import classes from './CharacterPage.module.css'
import Nav from './CharacterNav/CharacterNav'
import CharacterDetails from "./CharacterDetails/CharacterDetails"

export default () => {

    return <div className={classes.wrapper}>
        <Nav></Nav>
        <hr className={classes.vertical}></hr>
        <CharacterDetails />
    </div >

}