import React from 'react';
import styles from './Intro.module.scss';
import Link from '../Link/Link';
import meImage from '../assets/images/me.jpg';

const Intro = () => (
    <section className={styles.introContainer}>
        <img className={styles.introContainer__avatar} src={meImage} />
        <h2 className={styles.introContainer__heading}>Let me introduce myself</h2>
        <p className={styles.introContainer__description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Link email="kontakt@piotrkawula.pl" />
    </section>
);

export default Intro;