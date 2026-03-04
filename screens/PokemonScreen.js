import { ScrollView } from 'react-native'
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
        <ScrollView>
            <RenderPokemon
                pokemon={pokemon}
                description={description}
            />
        </ScrollView>
    )
}

export default PokemonScreen