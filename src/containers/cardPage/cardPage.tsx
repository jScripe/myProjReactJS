import * as React from 'react';

import MenuCards from "../menuCards/menuCards";

import "../general.scss";
import "./cardPage.scss";

interface Props {

}

class CardPage extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <div className="card-page">
                <MenuCards />
                <div className="container">
                   
                </div>
            </div>
        )
    }    
}

export default CardPage;