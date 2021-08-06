import React from 'react';

const ArrowIcon = ({ classes, width = '16', color }) => (
    <svg className={classes} width={width} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 17V1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1 8L8 1L15 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default ArrowIcon;
