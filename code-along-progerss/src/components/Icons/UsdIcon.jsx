import React from 'react';

const UsdIcon = ({ classes, width = '10', color }) => (
    <svg className={classes} width={width} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0 12H2C2 13.08 3.37 14 5 14C6.63 14 8 13.08 8 12C8 10.9 6.96 10.5 4.76 9.97C2.64 9.44 0 8.78 0 6C0 4.21 1.47 2.69 3.5 2.18V0H6.5V2.18C8.53 2.69 10 4.21 10 6H8C8 4.92 6.63 4 5 4C3.37 4 2 4.92 2 6C2 7.1 3.04 7.5 5.24 8.03C7.36 8.56 10 9.22 10 12C10 13.79 8.53 15.31 6.5 15.82V18H3.5V15.82C1.47 15.31 0 13.79 0 12Z"
            fill={color}
        />
    </svg>
);

export default UsdIcon;
