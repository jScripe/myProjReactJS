import * as React from 'react';
import { Link } from "react-router-dom";

import "./logo.scss";

interface Props {

}

function Logo(props: Props): JSX.Element {
    return (
        <Link to="/">
            <div className="logo">
                <span>L</span>
                <span>O</span>
                <span>G</span>
                <span>O</span>
            </div>
        </Link>
    )
}

export default Logo;