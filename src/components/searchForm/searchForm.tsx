import * as React from 'react';

import "./searchForm.scss";

interface Props {

}

function SearchForm(props: Props): JSX.Element {
    return (
        <div className="search-form">
            <input type="text" placeholder="Искать на сайте..." className="search-form__input"/>
            <i className="fa fa-search search-form__icon"></i>
        </div>
    )
}

export default SearchForm;