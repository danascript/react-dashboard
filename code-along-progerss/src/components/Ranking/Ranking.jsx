import React from 'react';
import PropTypes from 'prop-types';

import RankingItem from '../RankingItem';

const Ranking = ({ data }) => (
    <div className="w-100">
        {data.map((item, index) => (
            <RankingItem
                key={`${item.name}-${index}`}
                name={item.name}
                index={index}
                imgName={item.imgName}
                upTrend={item.upTrend}
                profit={item.profit}
            />
        ))}
    </div>
);

export default Ranking;

Ranking.propTypes = {
    data: PropTypes.array.isRequired,
};
