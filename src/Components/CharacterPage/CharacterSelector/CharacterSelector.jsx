import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ButtonGroup, Button } from 'react-bootstrap'
import classes from './CharacterSelector.module.css'

const CharacterSelector = (props) => {

    const characterView = (charData) => {

        let classTypeText = (['Titan', 'Hunter', 'Varlock'])[charData.classType];

        let imgPath = `https://www.bungie.net${charData.emblemPath}`;

        /* return <Dropdown.Item key={charData.id} onClick={() => onCharacterChange(charData.id)}>
            <img className={classes.selectorImg} src={imgPath} alt='path to emblem' />
            {classTypeText} {charData.ligth}</Dropdown.Item> */
        
        return <Button size='lg' variant='outline-secondary' active={charData.id === props.currentCharacterId}  style={{Width: 100 +'px'}}key={charData.id} onClick={() => onCharacterChange(charData.id)}>
            <img className={classes.selectorImg} src={imgPath} alt='path to emblem' />
            {classTypeText} {charData.ligth}
        </Button>
    }

    const onCharacterChange = (id) => {
        console.log(`selected character: ${id}`);
        props.onCharacterChange(id);

    }

    return (
        <div className={classes.container}>
            {/* <DropdownButton id="dropdown-basic-button" variant="dark" menuVariant='dark' title="Select character">
                {props.characters.map(character => characterView(character))}
            </DropdownButton> */}

            <ButtonGroup >
                {props.characters.map(character => characterView(character))}
            </ButtonGroup>
        </div >
    );
}


export default CharacterSelector