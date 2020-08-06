import React, { Component } from 'react'

export default class CharacterCard extends Component {
    render() {
        let character= this.props.character
        return (
            <div>
                <img src={this.props.image}></img>
                <h1> Character: {character.name} </h1>
                <h2> Gender: {character.gender}</h2>
                <p> Birth Date: {character.birth_year}</p>
                <p> Hair Color: {character.hair_color}</p>
            </div>
        )
    }

}

CharacterCard.defaultProps = {
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg'
}
