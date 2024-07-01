import React, { useEffect } from 'react';
import styles from './SpiderManSwing.module.css';
import SpiderManImage from './spider-man.png';

const SpiderManSwing = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            const spiderMan = document.getElementById('spiderMan');
            if (spiderMan) {
                spiderMan.classList.add(styles.swing);
                setTimeout(() => {
                    spiderMan.classList.remove(styles.swing);
                }, 3000);
            }
        }, 9000);

        return () => clearInterval(interval);
    }, []);

    return (
        <img id="spiderMan" src={SpiderManImage} alt="Spider-Man" className={styles.spiderMan} />
    );
};

export default SpiderManSwing;