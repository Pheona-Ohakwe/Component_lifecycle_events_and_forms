import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} This webpage was created & designed by Kayla Ard.</p>
        </footer>
    );
};

export default Footer;