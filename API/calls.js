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


// I think we might still need this function to lighten the load on the API calls, but im not sure. It works fine from my iPhone so I
// dont see any issues. I only think it is having an issue rendering because we are emulating on a Pixel 5

// export const getPokemonByPage = async(Page = 10) => {
//     try{
//         let response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${Page}&limit=10`)
//         return response
//     } catch(e) {
//         console.log(e)
//     }
// }
