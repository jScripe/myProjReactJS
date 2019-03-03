import * as React from 'react';

import "./card.scss";

interface Props {
    img: string;
    imgGold: string;
}

function Card(props: Props): JSX.Element {
    return (
        <div className="container-card">
            <div className="card">
                <div className="card__front">
                    <img src={props.img} alt="image"/>
                </div>
                <div className="card__back">
                    <img src={props.imgGold} alt="image"/>
                </div>
            </div>
        </div>
        
        
    )
}

export default Card;