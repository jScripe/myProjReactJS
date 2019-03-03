import * as React from 'react';

import MenuCards from "../menuCards/menuCards";
import Card from "../../components/card/card";

import "../general.scss";
import "./cardPage.scss";

interface Props {

}

class CardPage extends React.Component<Props> {

    public render(): JSX.Element {
        console.log(window);
        return (
            <div className="card-page">
                <MenuCards />
                <div className="container container-card-page">
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                </div>
            </div>
        )
    }    
}

export default CardPage;