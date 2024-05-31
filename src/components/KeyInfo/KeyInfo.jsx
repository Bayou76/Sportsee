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

export default KeyInfoItem;