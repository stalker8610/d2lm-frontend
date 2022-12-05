import { ButtonGroup, Button } from 'react-bootstrap'
import classes from './CharacterSelector.module.css'

import { useSelector, useDispatch } from 'react-redux';
import { characterSelected } from '@Redux/userSlice';
import { useNavigate } from 'react-router-dom';

const CharacterSelector = () => {

    const dispatch = useDispatch();
    const characters = useSelector(state => state.user.data.characters);
    const selectedCharacter = useSelector(state => state.user.selectedCharacter);

    const navigate = useNavigate();

    const onCharacterSelected = (id) => {
        if (id !== selectedCharacter){
            dispatch(characterSelected(id));
            navigate('/', { replace: true});
        }

    }

    const characterView = (charData) => {

        let classTypeText = (['Titan', 'Hunter', 'Varlock'])[charData.classType];
        let imgPath = `https://www.bungie.net${charData.emblemPath}`;

        return <Button size='lg' variant='outline-secondary'
            active={charData.id === selectedCharacter}
            style={{ Width: 100 + 'px' }}
            key={charData.id}
            onClick={() => onCharacterSelected(charData.id)}>
            <img className={classes.selectorImg} src={imgPath} alt='path to emblem' />
            {classTypeText} {charData.ligth}
        </Button>
    }

    return (
        <div className={classes.container}>
            <ButtonGroup >
                {characters.map(character => characterView(character))}
            </ButtonGroup>
        </div >
    );
}


export default CharacterSelector