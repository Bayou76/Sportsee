import React from 'react';
import PropTypes from 'prop-types';
import "./welcome.scss"

const Welcome = ({ name }) => {
    return (
        <div className="welcome">
            <h1>Bonjour <span>{name}</span></h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired, 
};

export default Welcome;
