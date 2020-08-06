import React, { Component } from 'react'
import CharacterCard from './CharacterCard'

export default class CharacterContainer extends Component {

    generateCard = () => {
         return this.props.characters.map(character => <CharacterCard character={character}/>)
    }
    
    render() {
        return (
            <div>
                { this.generateCard() }
            </div>
        )
    }
}
