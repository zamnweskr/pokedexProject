import { View } from 'react-native'
import { useState, useEffect } from 'react'
import { getPokemonSpeciesData } from '../API/calls'
import RenderPokemon from '../features/renderPokemon'

const PokemonScreen = ({ route }) => {
    const { pokemon } = route.params
    const [description, setDescription] = useState(null)
    const [evoChainId, setEvoChainId] = useState(null)

    useEffect(() => {
        getPokemonSpeciesData(pokemon.id).then(speciesData => {
            setDescription(speciesData)
            setEvoChainId(speciesData.evolution_chain.url.split('/').filter(Boolean).pop())
        })
        console.log(pokemon.id)
    }, [])

    return(
        <View style={{ flex: 1 }}>
            <RenderPokemon
                pokemon={pokemon}
                description={description}
                evoChainId={evoChainId}
            />
        </View>
    )
}

export default PokemonScreen