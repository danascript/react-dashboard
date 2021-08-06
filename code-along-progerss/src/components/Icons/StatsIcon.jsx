import React from 'react';

const StatsIcon = ({ classes, width = '18', color }) => (
    <svg className={classes} width={width} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 18H0V16H18V18ZM5 7H1V14H5V7ZM11 0H7V14H11V0ZM17 3H13V14H17V3Z" fill={color} />
    </svg>
);

export default StatsIcon;
