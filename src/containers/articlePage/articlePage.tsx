import * as React from 'react';

import "../general.scss";
import "./articlePage.scss";

interface Props {

}

class ArticlePage extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <div className="article-page">
                <div className="container">
                    Статьи                    
                </div>
            </div>
        )
    }    
}

export default ArticlePage;