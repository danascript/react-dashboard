import React from 'react';
import StatsItem from '../StatsItem';

const Stats = () => (
    <div className="d-flex flex-xl-column justify-content-xl-center justify-content-around w-100 text-center h-100">
        <StatsItem number="3456" description="Items on sale" />
        <StatsItem number="432" description="Sales this month" />
    </div>
);

export default Stats;
