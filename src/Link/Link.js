import React from 'react';
import styles from './Link.module.scss';

const Link = (props) => (
    <a className={styles.link__default} href={`mailto:${props.email}`} >{props.email}</a>
);

export default Link;