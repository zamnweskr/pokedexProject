import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import capitalize from '../utils/capitalize';
import typeColors from '../shared/typeColors';




const RenderPokemon = (props) => {
    const { pokemon, description } = props

    if (!pokemon) return null

    const typeName = pokemon.types[0].type.name
    console.log(pokemon.types)

    return (
        <>
            <View style={[styles.pokemonContainer, { backgroundColor: typeColors[typeName] }]}>
                <Image
                    source={{ uri: pokemon.sprites.other['official-artwork'].front_default }}
                    style={styles.pokemonImage}
                />
            </View>
            <View style={styles.typeStyle}>
                {pokemon.types.map((pokemonType) => {
                    console.log(pokemonType.type.name)
                    return (
                        <Text
                            key={pokemonType.type.name}
                            style={[
                                styles.typeStyleText,
                                {
                                    backgroundColor: typeColors[pokemonType.type.name],
                                    borderColor: typeColors[pokemonType.type.name]
                                }
                            ]}
                        >
                            {capitalize(pokemonType.type.name)}
                        </Text>
                    )
                })}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Text
                    style={styles.heightWeightStyle}
                >
                    Height: {pokemon.height / 10}m
                </Text>
                <Text
                    style={styles.heightWeightStyle}
                >
                    Weight: {pokemon.weight / 10}kg
                </Text>
            </View>
            <View style={styles.pokemonDescription}>
                <Text style={styles.descriptionStyle}>
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
        justifyContent: 'space-evenly',
    },
    typeStyleText: {
        fontSize: 24,
        marginTop: 30,
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 6,
    },
    heightWeightStyle: {
        marginTop: 20,
        fontSize: 20
    },
    pokemonDescription: {
        margin: 20,
        padding: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 12,
        borderWidth: 3,
        borderColor: '#ddd'
    },
    descriptionStyle: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 22,
        color: '#333'
    }
})

export default RenderPokemon