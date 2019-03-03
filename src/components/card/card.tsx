import * as React from 'react';

import "./card.scss";

interface Props {
    
}

function Card(props: Props): JSX.Element {
    return (
        <div className="container-card">
            <div className="card">
                <div className="card__front">
                </div>
                <div className="card__back">     
                </div>
            </div>
        </div>
        
        
    )
}

export default Card;