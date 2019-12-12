export const fetchCharacters = () => {
    return fetch('https://rickandmortyapi.com/api/character/', {
        method: 'get',
    })
        .then(response => response.json())
        .then(characters => {
            console.log('characters', characters)
            return characters.results;
        })
}

export const fetchCharacter = (characterId) => {
    return fetch(`https://rickandmortyapi.com/api/character/${parseInt(characterId[1])}`, {
        method: 'get',
    })
        .then(response => response.json())
        .then(character => {
            console.log('character', character)
            return character;
        })
}
