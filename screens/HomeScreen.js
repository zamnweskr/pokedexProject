import { Button, View, Text, TouchableOpacity, Image } from 'react-native'
import { getPokemon, getPokemonByName } from '../API/calls'
import { useState, useEffect } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Card } from 'react-native-elements'

const HomeScreen = ({ navigation }) => {
    const [pokemon, setPokemon] = useState([])
    const [pageCount, setPageCount] = useState(8)

    const fetchPokemon = async () => {
        const allPokemon = await getPokemon()
        console.log(allPokemon.data)
        return allPokemon
    }

    const getEachPokemon = async () => {
        const retrievedPokemon = await fetchPokemon()
        const results = await Promise.all(
            retrievedPokemon.results.map(async (currentPokemon) => {
                let response = await getPokemonByName(currentPokemon.name)
                return { ...currentPokemon, ...response.data }
            })
        )
        setPokemon(results)

    }

    useEffect(() => {
        setPokemon([])
        getEachPokemon()
    }, [])

    const capitalize = (name) => {
        return name[0].toUpperCase() + name.slice(1)
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                style={{ width: '100%' }}
                data={pokemon}
                keyExtractor={(pokemon) => pokemon.name}
                numColumns={3}
                renderItem={({ item: pokemon }) => (
                    <TouchableOpacity
                        style={{ flex: 1, margin: 4}}
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
                            <Card.Image
                                style={{ width: 80, height: 80 }}
                                source={{ uri: pokemon.sprites.front_default }}
                            />
                            <Card.Divider />
                            <Text>
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