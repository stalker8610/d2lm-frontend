import React from 'react'
import CharacterSelector from "./CharacterSelector/CharacterSelector";
import CharacterPage from './CharacterPage/CharacterPage';
import classes from './UserPage.module.scss'

const UserPage = () => {

    return <div className={classes.userPage}>
        <CharacterSelector />
        <CharacterPage />
    </div>

}

export default UserPage