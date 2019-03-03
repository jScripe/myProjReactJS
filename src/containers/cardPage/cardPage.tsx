import * as React from 'react';
import { connect } from 'react-redux';
import actions from "../../actions";

import MenuCards from "../menuCards/menuCards";
import Card from "../../components/card/card";

import "../general.scss";
import "./cardPage.scss";

interface Props {
    cardsByRace: object[];
}

class CardPage extends React.Component<Props> {

    public render(): JSX.Element {
        return (
            <div className="card-page">
                <MenuCards />
                <div className="container container-card-page">
                    {this.props.cardsByRace.map((card: any) => (
                        <Card key={card.cardId} img={card.img} imgGold={card.imgGold}></Card>
                    ))}
                </div>
            </div>
        )
    }    
}

function mapStateToProps(state: any) {
    return {
        cardsByRace: state.cards.cardsByRace,
    }
}


export default connect(mapStateToProps, actions)(CardPage);