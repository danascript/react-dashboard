import React from 'react';
import PropTypes from 'prop-types';

import googleNestImg from './../../assets/nest.jpg';
import appleMacBookImg from './../../assets/mbp.jpg';
import appleIpadImg from './../../assets/ipad.jpg';
import microsoftSurfaceBookImg from './../../assets/surface-book.jpg';
import appleImacProImg from './../../assets/imac-pro.jpg';
import samsungSmartWatchImg from './../../assets/samsung-smart-watch.jpg';
import appleImacImg from './../../assets/imac.jpg';
import airPodsImg from './../../assets/airpods.jpg';
import amazonSmartSpeakerImg from './../../assets/amazon-speaker.jpg';
import googlePixelImg from './../../assets/google-pixel.jpg';
import appleWatchImg from './../../assets/apple-watch.jpg';
import appleMonitorProImg from './../../assets/apple-watch.jpg';

import styles from './ProductImage.module.css';

const ProductImage = ({ imgName, productName }) => {
    const imgUrl = {
        googleNestImg,
        appleMacBookImg,
        appleIpadImg,
        microsoftSurfaceBookImg,
        appleImacProImg,
        samsungSmartWatchImg,
        appleImacImg,
        airPodsImg,
        amazonSmartSpeakerImg,
        googlePixelImg,
        appleWatchImg,
        appleMonitorProImg,
    }[`${imgName}Img`];

    return (
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={imgUrl} alt={productName} />
        </div>
    );
};

export default ProductImage;

ProductImage.propTypes = {
    imgName: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
};
