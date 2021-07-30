import React from 'react';

const ArrowIcon = ({ classes, width = '16', color = '#C3CAD9' }) => (
    <svg className={classes} width={width} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 17V1" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 8L8 1L15 8" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
);

export default ArrowIcon;
