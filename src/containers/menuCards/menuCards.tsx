import * as React from 'react';

import { races, sets, qualities } from "../../data/data";

import DropdownMenu from "../../components/dropdownMenu/dropdownMenu";

import '../general.scss';
import "./menuCards.scss";

interface Props {

}

class MenuCards extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <div className="menu-cards">
                <div className="container menu-cards__container">
                    <DropdownMenu data={races} label="По расе" width={100}/>
                    <DropdownMenu data={sets} label="По набору" width={230}/>
                    <DropdownMenu data={qualities} label="По качеству" width={120}/>
                </div>
            </div>
        )
    }    
}

export default MenuCards;