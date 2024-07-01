import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './CharacterDetails.module.css';

const CharacterDetails = ({ characterId, onLoadCharacterDetails }) => {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacterDetail = async () => {
            if (!characterId) return;

            const PUBLIC_KEY = '1d28bb9f109d14e76e9bc86d81b3ad04';
            const HASH = '041515c891645a5d1e3d271dff396f85';
            const url = `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;

            try {
                const response = await axios.get(url);
                const characterData = response.data.data.results[0];
                setCharacter(characterData);
                onLoadCharacterDetails(characterData.name, characterData.comics.available);
            } catch (error) {
                console.error('Error fetching character detail from Marvel API', error);
            }
        };

        fetchCharacterDetail();
    }, [characterId, onLoadCharacterDetails]);

    if (!character) return <div className={styles.characterDetails}>Select a character to see details</div>;

    return (
        <div className={styles.characterDetails}>
            <h2>{character.name}</h2>
            <p>{character.description || 'No description available'}</p>
            <p className={styles.characterInfo}>{character.name} has appeared in {character.comics.available} comics:</p>
            <ul>
                {character.comics.items.map(comic => (
                    <li key={comic.resourceURI}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetails;