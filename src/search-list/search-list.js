import React, { Component } from 'react';
import { Grid, Image, List, Header, Checkbox, Item } from 'semantic-ui-react'
import xbox from '../assets/xbox.png';
import battlenet from '../assets/battlenet.png';
import psn from '../assets/psn.png';

class SearchList extends Component {
    constructor() {
        super();
        this.selectProfile = this.selectProfile.bind(this);
    }
    
    selectProfile(profile) {
        console.log(profile);
        this.props.selectedProfile(profile)
    }

    render() {
        var list = this.props.searchResults.map(item => {
            const platform = item.membershipType === 4 ? <Image avatar src={battlenet} /> : 
                item.membershipType === 1 ? <Image avatar src={xbox} /> : 
                item.membershipType === 2 ? <Image avatar src={xbox} /> : 
                <div></div>;

            return (      
                <List.Item key={item.membershipId} onClick={() => this.selectProfile(item)}>
                    {platform}
                    <List.Content>
                        <List.Header>{item.displayName}</List.Header>
                    </List.Content>
                </List.Item> 
            )
        });

        return (
            <div>
                <Header size='large'>Search Results</Header>
                <Grid columns={2} divided>
                    <Grid.Column width={12}>
                        <List selection relaxed>
                            {list}
                        </List>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Checkbox label='Xbox' />
                        <Checkbox label='Battlenet' />
                        <Checkbox label='PSN' />

                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default SearchList;


/* <Item key={item.membershipId}>
    {platform}
    <Item.Content>
        <Item.Header as='a'>{item.displayName}</Item.Header>
        <Item.Description>
            <Header sub>Last Updated</Header>
            <span>{lastUpdate}</span>
        </Item.Description>
    </Item.Content>
</Item> */