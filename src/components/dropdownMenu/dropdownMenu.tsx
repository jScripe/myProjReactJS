import * as React from 'react';

import "./dropdownMenu.scss";

interface Props {
    data: {name: string, identifier: string}[];
    label: string;
    width: number;
    onClick?: (item: string) => any | undefined;
}

function DropdownMenu(props: Props): JSX.Element {
    return (
        <div className="dropdown-container">
            <p className="dropdown-container__label">{props.label}</p>
            <ul className="dropdown-container__list dropdown-list" style={{width: props.width}}>
                {props.data.map((item) => (<li className="dropdown-list__item">
                    <span onClick={() => {
                        props.onClick && props.onClick(item.identifier);
                    }}>{item.name}</span>
                </li>))}
            </ul>
        </div>
    )
}

export default DropdownMenu;