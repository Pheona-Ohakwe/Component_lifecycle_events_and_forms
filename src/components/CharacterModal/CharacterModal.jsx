import { useState, useEffect } from 'react';
import styles from './CharacterModal.module.css';
import CharacterDetails from '../CharacterDetails/CharacterDetails';

const CharacterModal = ({ character, onClose }) => {
    const [characterName, setCharacterName] = useState('');
    const [comicCount, setComicCount] = useState(0);

    const handleLoadCharacterDetails = (name, count) => {
        setCharacterName(name);
        setComicCount(count);
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                {character && (
                    <img
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        alt={character.name}
                        className={styles.characterThumbnail}
                    />
                )}
                <button className={styles.closeButton} onClick={onClose}>Close</button>
                <CharacterDetails 
                    characterId={character.id}
                    onLoadCharacterDetails={handleLoadCharacterDetails}
                />
            </div>
        </div>
    );
};
