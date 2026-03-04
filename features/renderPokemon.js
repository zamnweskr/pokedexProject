import { StyleSheet, Text, View, Image } from 'react-native';
import capitalize from '../utils/capitalize';
import typeColors from '../shared/typeColors';
import Slider from '@react-native-community/slider'




const RenderPokemon = (props) => {
    const { pokemon, description } = props

    if (!pokemon) return null

    const typeName = pokemon.types[0].type.name
    // console.log(pokemon.types)

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
                    // console.log(pokemonType.type.name)
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
            <View style={styles.statContainer}>
                <View style={styles.statContainer}>
                    {pokemon.stats.map((stat) => (
                        <View key={stat.stat.name} style={styles.statRow}>
                            <Text style={styles.statLabel}>{capitalize(stat.stat.name)}</Text>
                            <View style={styles.statSlider} pointerEvents="none">
                                <Slider
                                    style={{ flex: 1 }}
                                    value={stat.base_stat}
                                    maximumValue={255}
                                    minimumValue={0}
                                    step={1}
                                    animateTransitions
                                    minimumTrackTintColor={typeColors[typeName]}
                                    maximumTrackTintColor='#e0e0e0'
                                    thumbTintColor='transparent'
                                />
                            </View>
                            <Text style={styles.statValue}>{stat.base_stat}</Text>
                        </View>
                    ))}
                </View>
                {/* <FlatList
                    data={pokemon.stats}
                    keyExtractor={pokemon => pokemon.stat.name}
                    scrollEnabled={false}
                    renderItem={({ item: pokemon }) => (
                        <Slider
                            value={pokemon.base_stat}
                            maximumValue={300}
                            minimumValue={0}
                            step={1}
                            animateTransitions
                            disabled
                            trackStyle={{ height: 5, backgroundColor: 'transparent' }}
                        />
                    )}
                /> */}
                {/* <Text style={styles.statStyle}>
                    HP: {pokemon.stats[0].base_stat}
                    {console.log(pokemon.stats)}
                    Attack: {pokemon.stats[1].base_stat}
                    Defense: {pokemon.stats[2].base_stat}
                    Special Attack: {pokemon.stats[3].base_stat}
                    Special Defense: {pokemon.stats[4].base_stat}
                    Speed: {pokemon.stats[5].base_stat}
                </Text> */}
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
    },
    statContainer: {
        paddingHorizontal: 16,
        marginTop: 10,
        marginBottom: 30,
    },
    statRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
    },
    statLabel: {
        width: 110,
        fontSize: 13,
        color: '#555',
        fontWeight: '500',
    },
    statSlider: {
        flex: 1,
        height: 40,
    },
    statValue: {
        width: 35,
        textAlign: 'right',
        fontSize: 13,
        color: '#333',
        fontWeight: '600',
    }
})

export default RenderPokemon