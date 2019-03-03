import * as React from 'react';
import { connect } from 'react-redux';
import actions from "../../actions";

import { races, sets, qualities } from "../../data/data";

import DropdownMenu from "../../components/dropdownMenu/dropdownMenu";

import '../general.scss';
import "./menuCards.scss";

interface Props {

}

type joinedProps = Props & {
    getCardsByRace: (item: string) => any;
}

class MenuCards extends React.Component<joinedProps> {

    constructor(props: joinedProps) {
        super(props)
        this.handleClickOnItemDropdownMenu = this.handleClickOnItemDropdownMenu.bind(this);
    }

    handleClickOnItemDropdownMenu(item: string) {
        this.props.getCardsByRace(item);
    }

    public render(): JSX.Element {
        return (
            <div className="menu-cards">
                <div className="container menu-cards__container">
                    <DropdownMenu data={races} label="По расе" width={100} onClick={this.handleClickOnItemDropdownMenu}/>
                    <DropdownMenu data={sets} label="По набору" width={230}/>
                    <DropdownMenu data={qualities} label="По качеству" width={120}/>
                </div>
            </div>
        )
    }    
}

function mapStateToProps(state: any) {
    return {
        
    }
}

export default connect(mapStateToProps, actions)(MenuCards);