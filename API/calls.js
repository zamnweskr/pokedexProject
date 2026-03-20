import axios from 'axios'

export const getPokemon = async () => {
    try {
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const getPokemonByGeneration = async (id) => {
    try {
        let response = await axios.get(`https://pokeapi.co/api/v2/generation/${id}`)
        return response.data.pokemon_species
    } catch (e) {
        console.log(e)
    }
}

export const getPokemonByName = async (name) => {
    try {
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        return response
    } catch (e) {
        console.log('FAILED: ', name, e)
        alert(`We can't find that pokemon! Check your spelling and check your network connection, then try again!`)
    }

}

export const getPokemonSpecies = async (name) => {
    try {
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
        return response.data.varieties[0].pokemon.name
    } catch (e) {
        console.log('FAILED: ', name, e)
    }
}

export const getPokemonDescription = async (id) => {
    try {
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        return response.data
    } catch (e) {
        console.log(e)
        alert('An error has occurred retrieving the pokemon description, chack your connection and try again')
    }
}

export const getPokemonMoves = async (limit = 50, offset = 0) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/move?limit=${limit}&offset=${offset}`)
        return response.data
    } catch (e) {
        console.log(e)
        alert(`Sorry no moves found.`)
    }
}

export const getPokemonMovesByName = async (pokemonName) => {
    try {
        console.log(`Fetching: https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        return response.data.moves;
    } catch (e) {
        console.error(e);
        alert(`Sorry, could not fetch moves for ${pokemonName}.`);
        throw e;
    }
}

export const getPokemonMoveDetails = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        console.error(e);
        alert('Sorry, could not fetch move details.');

    }
}
export const getPokemonAbility = async (ability) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/ability?limit=150`)
        return response.data.results
    } catch (e) {
        console.log(e)
        alert(`Sorry no ability found.`)
    }
}

export const getPokemonAbilityDetails = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        console.error(e);
        alert('Sorry, could not fetch ability details.');

    }
}
