import React from 'react';
import PropTypes from 'prop-types';

import ProductImage from '../ProductImage';

import styles from './RankingItemAsset.module.css';

const RankingItemAsset = ({ name, index, imgName, classes }) => (
    <div className="d-flex align-items-center">
        {imgName ? (
            <ProductImage imgName={imgName} productName={name} />
        ) : (
            <div className={`mr-2 ${classes}`}>{index + 1}</div>
        )}
        <p className={`ml-2 mb-0 font-weight-bold ${styles.text}`}>{name}</p>
    </div>
);

export default RankingItemAsset;

RankingItemAsset.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    imgName: PropTypes.string,
    classes: PropTypes.string.isRequired,
};
