import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icons/Icon';

import styles from './CardHeader.module.css';

const CardHeader = ({ headline }) => (
    <div className="d-flex justify-content-between align-items-baseline mb-4">
        <h6 className={`${styles.headline} mb-0`}>{headline}</h6>
        <Icon icon="options" classes={'ml-2'} width={3} />
    </div>
);

export default CardHeader;

CardHeader.propTypes = {
    headline: PropTypes.string.isRequired,
};
