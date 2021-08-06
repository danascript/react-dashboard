import React from 'react';
import PropTypes from 'prop-types';

import { ICON_COLOR } from '../../shared/constants';

import ArrowIcon from './ArrowIcon';
import BasketIcon from './BasketIcon';
import CogIcon from './CogIcon';
import DashboardIcon from './DashboardIcon';
import DowntrendIcon from './DowntrendIcon';
import EyeIcon from './EyeIcon';
import GridIcon from './GridIcon';
import ListIcon from './ListIcon';
import OptionsIcon from './OptionsIcon';
import SearchIcon from './SearchIcon';
import StatsIcon from './StatsIcon';
import TasksIcon from './TasksIcon';
import UsdIcon from './UsdIcon';
import UserIcon from './UserIcon';

const Icon = props => {
    const components = {
        arrow: ArrowIcon,
        basket: BasketIcon,
        cog: CogIcon,
        dashboard: DashboardIcon,
        downtrend: DowntrendIcon,
        eye: EyeIcon,
        grid: GridIcon,
        list: ListIcon,
        options: OptionsIcon,
        search: SearchIcon,
        stats: StatsIcon,
        tasks: TasksIcon,
        usd: UsdIcon,
        user: UserIcon,
    };

    const IconComponent = components[props.icon];
    return <IconComponent {...props} />;
};

export default Icon;

Icon.propTypes = {
    props: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        color: PropTypes.string,
        width: PropTypes.number,
        classes: PropTypes.string,
    }),
};

Icon.defaultProps = {
    icon: 'arrow',
    color: ICON_COLOR,
};
