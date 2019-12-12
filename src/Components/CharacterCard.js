import React from 'react'
import Card from 'react-bootstrap/Card';

import './CharacterCard.css';

const CharacterCard = ({ character }) => {
    return (
        <Card className='mycard' style={{ display: 'inline-block' }}>
            <Card.Header><h3>{character.name}</h3></Card.Header>
            <Card.Img variant="top" src={character.image} />
            <Card.Body>
                <Card.Text>
                    <ul>
                        <li>Species: {character.species}</li>
                        <li>Gender: {character.gender}</li>
                        <li>Status: {character.status}</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CharacterCard;