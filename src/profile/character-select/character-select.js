import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { Genders, ClassTypes, RaceTypes } from '../../enums';
import Emblem from './../emblem/emblem';

class CharacterSelect extends Component {
    render() {
        const characters = this.props.characters.map(item => {
            const classType = ClassTypes.find(ct => {
                return item.classType === ct.value;
            })

            const race = RaceTypes.find(rt => {
                return item.raceType === rt.value;
            })

            const gender = Genders.find(gt => {
                return item.genderType === gt.value;
            })
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

        return (
            <Modal trigger={<Button>Basic Modal</Button>} basic size='fullscreen'>
                <Header icon='archive' content='Select Character' />
                <Modal.Content>
                    {characters}
                </Modal.Content>
            </Modal>
        );
    }
}

export default CharacterSelect;