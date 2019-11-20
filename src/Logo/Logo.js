import React from 'react';
import logo from '../assets/images/logo_3.png';
import styles from './Logo.module.scss';

const Logo = () => (
    <>
        <a className={styles.container} href="/">
            <img className={styles.container__img} src={logo} alt="Logo" />
            <span className={styles.container__text}>piotrkawula.pl</span>
        </a>
    </>
);

export default Logo;