import React from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

const Header = () => (
    <header className={styles.container}>
        <Logo />
        <Nav />
        <h1 className={styles.container__heading}><span className={styles.container__headingSub}>piotr</span>|{'{'}awula</h1>
    </header>
);

export default Header;