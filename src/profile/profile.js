import React, { Component } from 'react';
import axios from 'axios';
import { Item, Header, Label, Tab, Modal, Button } from 'semantic-ui-react';
import './profile.scss';
import { Genders, ClassTypes, RaceTypes, MembershipTypes } from '../enums';
import Emblem from './emblem/emblem';
import Tabs from './tabs/tabs';
import CharacterSelect from './character-select/character-select';

const baseUrl = 'https://www.bungie.net/Platform'
const apiKey = '317c32bf679c4bb7835bbdf735a6df21';

class Profile extends Component {
    constructor() {
        super();
        this.getProfile = this.getProfile.bind(this);
        this.selectCharacter = this.selectCharacter.bind(this);
        this.state = {
            profile: null,
            stats: null,
            selectedCharacterId: 0
        }
    }

    componentDidMount() {
        this.getProfile();
    }

    getProfile() {
        axios.get(baseUrl + '/Destiny2/' + this.props.membershipData.membershipType + '/Profile/' + this.props.membershipData.membershipId + '/', {
            headers: {
                'x-api-key': apiKey
            },
            params: {
                'components': '100,103,200'
            }
        }).then(response => this.setState({ profile: response.data.Response }))
    }

    selectCharacter(id) {
        this.setState({ selectedCharacterId: id})
    }

    render() {
        if (this.state.profile !== null) {
            let charArray = [];
            let selectedCharacter = <Button>No Character Selected</Button>

            Object.keys(this.state.profile.characters.data).forEach(key => {
                const character = this.state.profile.characters.data[key];
                charArray.push(character);
            });

            const characters = charArray.map(item => {
                const classType = ClassTypes.find(ct => {
                    return item.classType === ct.value;
                })

                const race = RaceTypes.find(rt => {
                    return item.raceType === rt.value;
                })

                const gender = Genders.find(gt => {
                    return item.genderType === gt.value;
                })

                if (item.characterId === this.state.selectedCharacterId) {
                    selectedCharacter = 
                        <Emblem
                            characterId={item.characterId}
                            emblemPath={item.emblemBackgroundPath}
                            classType={classType.name}
                            race={race.name}
                            gender={gender.name}
                            light={item.light}
                            level={item.baseCharacterLevel} />;
                }

                return (
                    <Emblem selectCharacterId={this.selectCharacter}
                        key={item.characterId}
                        characterId={item.characterId}
                        emblemPath={item.emblemBackgroundPath}
                        classType={classType.name}
                        race={race.name}
                        gender={gender.name}
                        light={item.light}
                        level={item.baseCharacterLevel} />
                )
            });

            const platform = MembershipTypes.find(mt => {
                return this.props.membershipData.membershipType === mt.value;
            })

            const tabs = <Tabs membershipData={this.props.membershipData} characterId={this.state.selectedCharacterId}/>
            return (
                <div>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Item.Header>{this.state.profile.profile.data.userInfo.displayName}</Item.Header>
                                <Item.Extra>
                                    <Label>{platform.name}</Label>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>                    
                    <Modal trigger={selectedCharacter} basic size='fullscreen'>
                        <Header icon='archive' content='Select Character' />
                        <Modal.Content>
                            {characters}
                        </Modal.Content>
                    </Modal>
                    {tabs}
                </div>
            );
        } else return (<div></div>)
    }
}

export default Profile;