import React from 'react';
import PropTypes from 'prop-types';
import './keyInfo.scss';
import './keyInfo.scss'

function KeyInfoItem({ label, value, unit, icon }) {
    return (
        <div className="keyInfo">
            <img alt={label} src={icon} className={`keyInfo_icon`} />
            <div className={`keyInfo_data`}>
                <p className={`keyInfo_data_value`}>{value}{unit}</p>
                <p>{label}</p>
            </div>
        </div>
    );
}
KeyInfoItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default KeyInfoItem;