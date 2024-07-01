import styles from './Header.module.css';
import marvelLogo from './marvel.jpg'

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={marvelLogo} alt="Marvel Logo" className={styles.logoImage} />
            <h2>Click on a character to see details</h2>
        </header>
    );
};

export default Header;