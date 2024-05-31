import React from 'react';
import "./welcome.scss"

const Welcome = ({ name }) => {
    return (
        <div className="welcome">
            <h1>Bonjour <span>{name}</span></h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}

export default Welcome;
