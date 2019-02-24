import * as React from 'react';
import { Link } from "react-router-dom";

import "./menu.scss";

interface Props {

}

function Menu(props: Props): JSX.Element {
    return (
        <ul className="menu">
            <Link to="/" className="menu__item">Главная</Link>
            <Link to="/article" className="menu__item">Статьи</Link>
            <Link to="/deck" className="menu__item">Колоды</Link>
            <Link to="/card" className="menu__item">Карты</Link>
        </ul>
    )
}

export default Menu;