import * as React from 'react';

import "../general.scss";
import "./mainPage.scss";

interface Props {

}

class MainPage extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <div className="main-page">
                <div className="container">
                    Главная                    
                </div>
            </div>
        )
    }    
}

export default MainPage;