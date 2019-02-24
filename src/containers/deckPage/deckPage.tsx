import * as React from 'react';

import "../general.scss";
import "./deckPage.scss";

interface Props {

}

class DeckPage extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <div className="deck-page">
                <div className="container">
                    Колоды                    
                </div>
            </div>
        )
    }    
}

export default DeckPage;