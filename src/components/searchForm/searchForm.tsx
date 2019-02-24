import * as React from 'react';

import "./searchForm.scss";

interface Props {

}

function SearchForm(props: Props): JSX.Element {
    return (
        <form action="" method="get" className="search-form">
            <input type="text" placeholder="Искать на сайте..." />
            <button type="submit"><i className="fa fa-search"></i></button>
        </form>
    )
}

export default SearchForm;