import React from 'react';
import styles from './Nav.module.scss';

const Nav = () => (
    <nav className={styles.navContainer}>
        <button className={styles.navContainer__button}>
            <span className={styles.navContainer__button_line}></span>
            <span className={styles.navContainer__button_line}></span>
            <span className={styles.navContainer__button_line}></span>
        </button>
    </nav>
);

export default Nav;