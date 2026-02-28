import { StyleSheet, Text, View, Image } from 'react-native';


const RenderPokemon = (props) => {
    const { pokemon } = props

    if (!pokemon) return null

    return (
        <View style={ styles.pokemonContainer }>
            <Image
                source={{ uri: pokemon.sprites.other['official-artwork'].front_default}}
                style={ styles.pokemonImage }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    pokemonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F08030',
        borderBottomLeftRadius: 75,
        borderBottomRightRadius: 75
    },
    pokemonImage: {
        width: 300,
        height: 300,
    }
})

export default RenderPokemon