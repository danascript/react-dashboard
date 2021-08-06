import React from 'react';
import PropTypes from 'prop-types';

import CardHeader from './../CardHeader';

import styles from './Card.module.css';

const Card = ({ headline, children }) => (
    <div className={styles.card}>
        <CardHeader headline={headline} />
        <div className="h-100">{children}</div>
    </div>
);

export default Card;

Card.propTypes = {
    headline: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
