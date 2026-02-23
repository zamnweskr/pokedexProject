import axios from 'axios'

export const getPokemon = async () => {
    try{
        let response = axios.get('https://pokeapi.com/api/v2/pokemon')
        return response.data
    } catch(e) {
        console.log(e)
    }
}

export const getPokemonByName = async (name) => {
    try{
        let response = axios.get(`https://pokeapi.com/api/v2/pokemon/${name}`)
    return response
    } catch(e) {
        console.log(e)
        alert(`We can't find that pokemon! Check your spelling, and check your network connection, and try again!`)
    }
    
}
