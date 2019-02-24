import * as React from 'react';

import "../general.scss";
import "./cardPage.scss";

interface Props {

}

class CardPage extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <div className="card-page">
                <div className="container">
                    Карты                    
                </div>
            </div>
        )
    }    
}

export default CardPage;