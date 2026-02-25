import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'

const PokemonScreen = ({ route }) => {
    const { pokemon } = route.params
    return(
        <View>
            <Text>
                This is the Pokemon Screen where you will see the detailed information about the pokemon
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default PokemonScreen