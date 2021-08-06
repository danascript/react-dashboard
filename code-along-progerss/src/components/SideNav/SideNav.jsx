import React from 'react';

import Icon from './../Icons/Icon';
import SideNavLinks from '../SideNavLinks';

import styles from './SideNav.module.css';

const SideNav = () => (
    <aside className={styles.sideNav}>
        <div className={styles.image}></div>
        <SideNavLinks />
        <Icon classes={styles.arrow} />
    </aside>
);

export default SideNav;
