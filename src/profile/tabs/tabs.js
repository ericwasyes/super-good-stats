import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import axios from 'axios';
import CareerStats from './career-stats/career-stats';

const baseUrl = 'https://www.bungie.net/Platform'
const apiKey = '317c32bf679c4bb7835bbdf735a6df21';

class Tabs extends Component {   
    constructor() {
        super();
        this.getStatsByCharacter = this.getStatsByCharacter.bind(this);
        this.state = {
            stats: null
        }
    }

    componentDidMount() {
        this.getStatsByCharacter();
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.characterId !== this.props.characterId) {
            this.getStatsByCharacter();
        }
    }

    getStatsByCharacter() {
        axios.get(baseUrl + '/Destiny2/' + this.props.membershipData.membershipType + '/Account/' + this.props.membershipData.membershipId + '/Character/' + this.props.characterId + '/Stats/', {
            headers: {
                'x-api-key': apiKey
            }
        }).then(response => {
            this.setState({ stats: response.data.Response })
        })
    }
    
    render() {
        if (this.state.stats !== null) {

            let panes = [
                { menuItem: 'Career Stats', render: () => <Tab.Pane attached={false}><CareerStats stats={this.state.stats} /></Tab.Pane> },
                { menuItem: 'Game History', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
                { menuItem: 'Weapons', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
                { menuItem: 'Armor', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
                { menuItem: 'General', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
                { menuItem: 'Postmaster', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
                { menuItem: 'Inventory', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
                { menuItem: 'Collections', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> }
            ]

            return (
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
            );
        } else {
            return <div></div>
        }
    }
}

export default Tabs;