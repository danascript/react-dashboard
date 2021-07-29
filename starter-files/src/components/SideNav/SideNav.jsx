import React from 'react';

import styles from './SideNav.module.css';

const SideNav = () => {
    return (
        <aside className={styles.sideNav}>
            <div className={styles.image}></div>
            <div className={styles.panel}>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
            </div>
            <div className={styles.icon}></div>
        </aside>
    );
};

export default SideNav;
