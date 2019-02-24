import * as React from 'react';
import { Link } from "react-router-dom";

import "./DropdownMenu.scss";

interface Props {
    data: string[];
    label: string;
    width: number
}

function DropdownMenu(props: Props): JSX.Element {
    return (
        <div className="dropdown-container">
            <p className="dropdown-container__label">{props.label}</p>
            <ul className="dropdown-container__list dropdown-list" style={{width: props.width}}>
                {props.data.map((item) => (<li className="dropdown-list__item">
                    <a href="#">{item}</a>
                </li>))}
            </ul>
        </div>
    )
}

export default DropdownMenu;