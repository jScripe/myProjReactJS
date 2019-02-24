import * as React from 'react';

import Logo from "../../components/logo/logo";
import Menu from "../../components/menu/menu";
import SearchForm from "../../components/searchForm/searchForm";

import "./header.scss";

interface Props {

}

class Header extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <header className="header">
                <nav className="container-header container">
                    <Logo />
                    <Menu />
                    <SearchForm />
                </nav>
            </header>
        )
    }
}

export default Header;