import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './CharacterList.module.css';

const CharacterList = ({ onCharacterSelect }) => {
    const [characters, setCharacters] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const fetchCharacters = async (offset) => {
        const PUBLIC_KEY = '1d28bb9f109d14e76e9bc86d81b3ad04';
        const HASH = '041515c891645a5d1e3d271dff396f85';
        const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}&offset=${offset}`;

        try {
            const response = await axios.get(url);
            const newCharacters = response.data.data.results;

            if (newCharacters.length > 0) {
                if (offset === 0) {
                    setCharacters(newCharacters);
                } else {
                    setCharacters(prevCharacters => [...prevCharacters, ...newCharacters]);
                }
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching data from Marvel API', error);
            setHasMore(false);
        }
    };

    useEffect(() => {
        fetchCharacters(offset);
    }, [offset]);

    const handleLoadMore = () => {
        setOffset(prevOffset => prevOffset + 20);
    };

    return (
        <div>
            <div className={styles.characterList}>
                {characters.map(character => (
                    <div key={character.id} className={styles.characterItem}>
                        <h2>{character.name}</h2>
                        <img
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={character.name}
                            className={styles.characterImage}
                            onClick={() => onCharacterSelect(character)}
                        />
                    </div>
                ))}
            </div>
            {hasMore && (
                <button onClick={handleLoadMore} className={styles.loadMoreButton}>
                    Load More
                </button>
            )}
        </div>
    );
};

export default CharacterList;