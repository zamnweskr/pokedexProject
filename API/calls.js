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

export const getPokemonMoves = async (move) => {
    try{
       const response = await axios.get(`https://pokeapi.co/api/v2/move?limit=150`)
        return response.data.results
    } catch(e) {
        console.log(e)
        alert(`Sorry no moves found.`)
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
};


// I dont think I will need this function anymore as we arent going by pages and we can just render all the pokemon at once in a flatlist 

// export const getPokemonByPage = async(Page = 10) => {
//     try{
//         let response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${Page}&limit=8`)
//         return response
//     } catch(e) {
//         console.log(e)
//     }
// }
