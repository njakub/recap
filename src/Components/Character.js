import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as api from '../Api/CharacterApi'
import CharacterCard from './CharacterCard'
import Button from 'react-bootstrap/Button';


class CharacterList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            character: {},
        }
    }

    componentDidMount() {
        api.fetchCharacter(this.props.match.params.userId).then(character => {
            this.setState({
                character
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1> Character </h1>
                <CharacterCard character={this.state.character} />
                <Button href='/'>
                    Back
                </Button>
            </React.Fragment>
        )
    }
}

export default CharacterList;