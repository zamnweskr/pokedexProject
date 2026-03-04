import { View } from 'react-native'
import { useState, useEffect } from 'react'
import { getPokemonDescription } from '../API/calls'
import RenderPokemon from '../features/renderPokemon'

const PokemonScreen = ({ route }) => {
    const { pokemon } = route.params
    const [description, setDescription] = useState(null)

    useEffect(() => {
        getPokemonDescription(pokemon.id).then(desc => setDescription(desc))
    }, [])

    return(
        <View style={{ flex: 1 }}>
            <RenderPokemon
                pokemon={pokemon}
                description={description}
            />
        </View>
    )
}

export default PokemonScreen