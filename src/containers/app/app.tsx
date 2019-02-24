import * as React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../mainPage/mainPage";
import ArticlePage from "../articlePage/articlePage";
import CardPage from "../cardPage/cardPage";
import DeckPage from "../deckPage/deckPage";

import "../normalize.scss";
import "../general.scss";
import "./app.scss";


const history = createBrowserHistory();

interface Props {

}

class App extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <Router history={history}>
                <div className="page">
                    <Header />
                    <Switch>
                        <Route path="/" component={ MainPage } exact></Route>
                        <Route path="/article" component={ ArticlePage }></Route>
                        <Route path="/card" component={ CardPage }></Route>
                        <Route path="/deck" component={ DeckPage }></Route>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        )
    }    
}

export default App;