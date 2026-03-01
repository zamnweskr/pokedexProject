import { View } from 'react-native'
import { useState, useEffect } from 'react'
import RenderPokemon from '../features/RenderPokemon'
import { getPokemonDescription } from '../API/calls'

const PokemonScreen = ({ route }) => {
    const { pokemon } = route.params
    const [description, setDescription] = useState(null)

    useEffect(() => {
        getPokemonDescription(pokemon.id).then(desc => setDescription(desc))
    }, [])

    return(
        <View>
            <RenderPokemon
                pokemon={pokemon}
                description={description}
            />
        </View>
    )
}

export default PokemonScreen