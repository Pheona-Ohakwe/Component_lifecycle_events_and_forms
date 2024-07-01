import { useEffect } from 'react';
import styles from './HulkDrop.module.css';
import HulkImage from './hulk.png';

const HulkDrop = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            const hulk = document.getElementById('hulk');
            if (hulk) {
                hulk.classList.add(styles.visible);
                hulk.classList.add(styles.drop);
                setTimeout(() => {
                    hulk.classList.remove(styles.drop);
                    hulk.classList.remove(styles.visible);
                }, 5000); 
            }
        }, 14000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.hulkContainer}>
            <img id="hulk" src={HulkImage} alt="Hulk" className={styles.hulk} />
        </div>
    );
};

export default HulkDrop;