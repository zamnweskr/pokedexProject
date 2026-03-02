import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import capitalize from '../utils/capitalize';
import typeColors from '../shared/typeColors';




const RenderPokemon = (props) => {
    const { pokemon, description } = props
    const typeName = pokemon.types[0].type.name
    console.log(pokemon.types)

    if (!pokemon) return null

    return (
        <>
            <View style={[ styles.pokemonContainer, {backgroundColor: typeColors[typeName]} ]}>
                <Image
                    source={{ uri: pokemon.sprites.other['official-artwork'].front_default }}
                    style={styles.pokemonImage}
                />
            </View>
            <View style={styles.typeStyle}>
                {pokemon.types.map((pokemonType) => {
                    console.log(pokemonType.type.name)
                    return (
                        <Text key={pokemonType.type.name}>
                            {capitalize(pokemonType.type.name)}
                        </Text>
                    )
                })}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text>
                    Height: {pokemon.height / 10}m
                </Text>
                <Text>
                    Weight: {pokemon.weight / 10}kg
                </Text>
            </View>
            <View style={styles.pokemonDescription}>
                <Text style={{ textAlign: 'center' }}>
                    {description?.flavor_text_entries
                        ?.find(textEntry => textEntry.language.name === 'en')
                        ?.flavor_text
                        ?.replace(/\f/g, ' ')
                        ?.replace(/\n/g, ' ')
                    }
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    pokemonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 75,
        borderBottomRightRadius: 75,
    },
    pokemonImage: {
        width: 300,
        height: 300,
    },
    typeStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    pokemonDescription: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})

export default RenderPokemon