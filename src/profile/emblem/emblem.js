import React, { Component } from 'react';
import { Image, Header } from 'semantic-ui-react';
import './emblem.scss';

const imgBaseUrl = 'https://www.bungie.net'

class Emblem extends Component {
    constructor() {
        super();
        this.selectCharacter = this.selectCharacter.bind(this);
    }
    selectCharacter() {
        console.log(this.props.characterId);
        this.props.selectCharacterId(this.props.characterId)
    }

    render() {
        return (
            <div className='emblem-container'>
                <div key={this.props.characterId} className='emblem' onClick={this.selectCharacter}>
                    <Image src={imgBaseUrl + this.props.emblemPath} />
                    <div className='class-type'><Header inverted size='huge'>{this.props.classType}</Header></div>
                    <div className='race-type'><Header inverted color='grey' size='medium'>{this.props.race + ' ' + this.props.gender}</Header></div>
                    <div className='light'>
                        <h1>{this.props.light}</h1>
                    </div>
                    <div className='level'>
                        <Header inverted color='grey' size='medium'>Level {this.props.level}</Header>
                    </div>
                </div>
            </div>
        );
    }
}

export default Emblem;