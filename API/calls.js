import axios from 'axios'

export const getPokemon = async () => {
    try{
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        return response.data
    } catch(e) {
        console.log(e)
    }
}

export const getPokemonByName = async (name) => {
    try{
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        return response
    } catch(e) {
        console.log(e)
        alert(`We can't find that pokemon! Check your spelling and check your network connection, then try again!`)
    }
    
}

export const getPokemonDescription = async (id) => {
    try{
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        return response.data
    } catch(e) {
        console.log(e)
        alert('An error has occurred retrieving the pokemon description, chack your connection and try again')
    }
} 

export const getPokemonMoves = async (move) => {
    try{
       const response = await axios.get(`https://pokeapi.co/api/v2/move?limit=150`)
        return response.data.results
    } catch(e) {
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
    try{
       const response = await axios.get(`https://pokeapi.co/api/v2/ability?limit=150`)
        return response.data.results
    } catch(e) {
        console.log(e)
        alert(`Sorry no ability found.`)
    }
    }

// I think we might still need this function to lighten the load on the API calls, but im not sure. It works fine from my iPhone so I
// dont see any issues. I only think it is having an issue rendering because we are emulating on a Pixel 5
    export const getPokemonAbilityDetails = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.error(e);
    alert('Sorry, could not fetch ability details.');
    
  }
}

export const getEvolutionChain = async (id) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}`)
        return response.data
    } catch (e) {
        console.error(e);
        alert('Sorry, could not fetch evolution chain.')
    }
}

// I dont think I will need this function anymore as we arent going by pages and we can just render all the pokemon at once in a flatlist 

// export const getPokemonByPage = async(Page = 10) => {
//     try{
//         let response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${Page}&limit=10`)
//         return response
//     } catch(e) {
//         console.log(e)
//     }
// }
