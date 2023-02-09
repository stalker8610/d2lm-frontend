import { useSelector, useDispatch } from 'react-redux';
import { characterSelected } from '@Redux/userSlice';
import { useNavigate } from 'react-router-dom';
import classes from './CharacterSelector.module.scss'

export default () => {

    const dispatch = useDispatch();
    const characters = useSelector(state=>state.user.data.characters);
    const selectedCharacter = useSelector(state => state.user.selectedCharacter);

    const navigate = useNavigate();

    const onCharacterSelected = (id) => {
        if (id !== selectedCharacter) {
            dispatch(characterSelected(id));
            navigate('/equipment', { replace: true });
        }

    }

    const characterView = (charData) => {

        const classTypeText = (['Titan', 'Hunter', 'Varlock'])[charData.classType];
        const raceText = (['Human', 'Awoken', 'Exo'])[charData.raceType];
        const imgPath = `https://www.bungie.net${charData.emblemBackgroundPath}`;
        const className = (charData.id === selectedCharacter) ? `${classes.badge} ${classes.active}`: `${classes.badge}`;

        return <div className={className} key={charData.id} style={{ backgroundImage: `url(${imgPath})` }} onClick={() => onCharacterSelected(charData.id)}>
            <div className={classes.class}>{classTypeText}</div>
            <div className={classes.race}>{raceText}</div>
            <div className={classes.light}>{charData.light}</div>
        </div>

    }

    return (
        <div className={classes.container}>
            {characters.map(character => characterView(character))}
        </div >
    );
}