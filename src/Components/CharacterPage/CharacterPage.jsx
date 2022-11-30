import { useState } from 'react'
import CharacterSelector from "./CharacterSelector/CharacterSelector";
import SelectedCharacterEquipment from './SelectedCharacterEquipment/SelectedCharacterEquipment';
import classes from './CharacterPage.module.css';
import { useEffect } from 'react';

const CharacterPage = (props) => {

    const [currentCharacterId, setCurrentCharacterId] = useState(null)
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setCurrentCharacterId(props.characters.length > 0 ? props.characters[0].id : null);
    }, [props.characters])

    return <div className={classes.container}>
        <CharacterSelector characters={props.characters} currentCharacterId={currentCharacterId} onCharacterChange={(id) => setCurrentCharacterId(id)} />
        {currentCharacterId && <SelectedCharacterEquipment characterId={currentCharacterId} />}
    </div>

}

export default CharacterPage