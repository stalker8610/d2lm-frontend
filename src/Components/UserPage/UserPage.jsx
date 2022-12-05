import CharacterSelector from "./CharacterSelector/CharacterSelector";
import CharacterPage from './CharacterPage/CharacterPage';
import classes from './UserPage.module.css';

const UserPage = () => {

    return <div className={classes.container}>
        <CharacterSelector />
        <hr className={classes.hr}/>
        <CharacterPage />
    </div>

}

export default UserPage