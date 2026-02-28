<<<<<<< HEAD
import { View, Text } from 'react-native'
import RenderPokemon from '../features/RenderPokemon'
=======
import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'
>>>>>>> ab1e343b694263a21a523f48f86afa476f9019cc

const PokemonScreen = ({ route }) => {
    const { pokemon } = route.params
    return(
        <View>
            <RenderPokemon
                pokemon={pokemon}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default PokemonScreen