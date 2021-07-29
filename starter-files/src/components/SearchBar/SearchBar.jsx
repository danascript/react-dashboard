import React from 'react';

import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div>
            <input placeholder="Search" className={styles.search} type="search" />
        </div>
    );
};

export default SearchBar;
