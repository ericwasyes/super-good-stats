import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import Navbar from './navbar/navbar';
import SearchList from './search-list/search-list';
import Profile from './profile/profile';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.getSearchResults = this.getSearchResults.bind(this);
        this.selectProfile = this.selectProfile.bind(this);
        this.state = {
            searchResults: null,
            membershipData: null,
        }
    }

    selectProfile(data) {
        console.log(data);
        this.setState({ membershipData: data });
        console.log(this.state);
    }

    getSearchResults(searchResults) {
        this.setState({ searchResults: searchResults });
        console.log(this.state);
    }

    render() {
        let searchResults = 
            this.state.searchResults !== null ? 
            <SearchList selectedProfile={this.selectProfile} searchResults={this.state.searchResults} /> : 
            <div></div>;

        let profile = 
            this.state.membershipData !== null && 
            this.state.membershipData !== undefined ?
            <Profile membershipData={this.state.membershipData} /> :
            <div></div>

        return (
            <div>
                <Navbar searchResults={this.getSearchResults} />
                <Container className="main-container">
                    {searchResults}
                    {profile}
                </Container>     
            </div>
        );
    }
}

export default App;


