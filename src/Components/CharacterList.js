import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CharacterCard from './CharacterCard'
import * as api from '../Api/CharacterApi'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class CharacterList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            characters: [],
        }
    }

    componentDidMount() {
        api.fetchCharacters().then(characters => {
            this.setState({
                characters
            })
        })
    }


    render() {
        return (
            <React.Fragment>
                <h1> Character List </h1>
                <div class="row">
                    <ul>
                        {this.state.characters.map(character =>
                            <Link to={`character:${character.id}`}>
                                <CharacterCard character={character} />
                            </Link>
                        )}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default CharacterList;