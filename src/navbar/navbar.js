import React, { Component } from 'react';
import { Container, Input, Menu } from 'semantic-ui-react'
import axios from 'axios';

const baseUrl = 'https://www.bungie.net/Platform';
const apiKey = '317c32bf679c4bb7835bbdf735a6df21';

class Navbar extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.searchUsers = this.searchUsers.bind(this);
        this.state = {
            searchQuery: null,
            searchResults: null
        }
    }

    searchUsers() {
        axios.get(baseUrl + '/Destiny2/SearchDestinyPlayer/-1/' + 'thebdanabstract' + '/', {
            headers: {
                'x-api-key': apiKey
            }
        })
            .then(response => {
                this.setState({ searchResults: response.data.Response });
                console.log(this.state);
                this.props.searchResults(this.state.searchResults);
            })
            .catch(response => {})
    }

    handleChange(e) {
        this.setState({ searchQuery: e.target.value });
        console.log(this.state.searchQuery);
    }

    render() {
        return (
            <Menu fixed='top'>
                <Container>
                    <Menu.Item position='right'>
                        <Input action={{ type: 'submit', content: 'Go', onClick: this.searchUsers }} placeholder='Search Player Name...' onChange={this.handleChange} />
                    </Menu.Item>
                </Container>
            </Menu>
        );
    }
}

export default Navbar;