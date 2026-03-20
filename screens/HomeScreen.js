import { View, Text, TouchableOpacity } from 'react-native'
import { getPokemon, getPokemonByName, getPokemonByGeneration, getPokemonSpecies } from '../API/calls'
import { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { Card } from 'react-native-elements'
import capitalize from '../utils/capitalize'

const HomeScreen = ({ navigation, route }) => {
    const [pokemon, setPokemon] = useState([])

    const fetchPokemon = async () => {
        const allPokemon = await getPokemonByGeneration(route.params?.generation ?? 1)
        return allPokemon
    }

    const getEachPokemon = async () => {
        const retrievedPokemon = await fetchPokemon()
        const results = await Promise.all(
            retrievedPokemon.map(async (currentPokemon) => {
                console.log(currentPokemon.name)
                try {
                    let defaultFormName = await getPokemonSpecies(currentPokemon.name)
                    let response = await getPokemonByName(defaultFormName)
                    return { ...currentPokemon, ...response.data, name: currentPokemon.name }
                } catch (e) {
                    return null
                }

            })
        )
        setPokemon(results.filter(problemPoke => problemPoke !== null).sort((a, b) => a.id - b.id))
    }

    useEffect(() => {
        setPokemon([])
        getEachPokemon()
    }, [route.params?.generation])

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                style={{ width: '100%' }}
                data={pokemon}
                keyExtractor={(pokemon) => pokemon.name}
                numColumns={3}
                renderItem={({ item: pokemon }) => (
                    <TouchableOpacity
                        style={{ flex: 1, margin: 4 }}
                        onPress={() =>
                            navigation.navigate('Pokemon', { pokemon: pokemon })
                        }
                    >
                        <Card containerStyle={{ margin: 0, borderRadius: 12 }}>
                            <Text style={{ alignSelf: 'flex-start' }}>
                                {pokemon.id}
                            </Text>
                            <Card.Title>
                                {capitalize(pokemon.name)}
                            </Card.Title>
                            <Card.Divider />
                            <View style={{ alignSelf: 'center' }}>
                                <Card.Image
                                    style={{
                                        width: 80,
                                        height: 80,
                                    }}
                                    source={{ uri: pokemon.sprites?.front_default }}
                                />
                            </View>
                            <Card.Divider />
                            <Text style={{ textAlign: 'center' }}>
                                {capitalize(pokemon.types[0].type.name)}
                            </Text>
                        </Card>
                    </TouchableOpacity>

                )}
            />
        </View>
    )
}

export default HomeScreen