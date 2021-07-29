import React from 'react';

import SearchBar from '../SearchBar';

import styles from './TopNav.module.css';

const TopNav = () => {
    return (
        <nav className={styles.topNav}>
            <h5 className={styles.brand}>Dashy Dash</h5>
            <SearchBar />
        </nav>
    );
};

export default TopNav;
