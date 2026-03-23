import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react'
import { getEvoChain, getPokemonByName, getPokemonSpecies } from '../API/calls';
import { Card } from 'react-native-elements'
import capitalize from '../utils/capitalize'
import typeColors from '../shared/typeColors'



const EvolutionsScreen = ({ route }) => {
    const { evoChainId } = route.params
    const [evoChain, setEvoChain] = useState(null)
    const [stages, setStages] = useState([])

    useEffect(() => {
        getEvoChain(evoChainId).then(async (data) => {
            setEvoChain(data)
            const first = data.chain
            const second = first?.evolves_to[0]
            const third = second?.evolves_to[0]
            const evoStages = [first, second, third].filter(Boolean)
            const stagesWithData = await Promise.all(
                evoStages.map(async (stage) => {
                    const defaultFormName = await getPokemonSpecies(stage.species.name)
                    const pokemon = await getPokemonByName(defaultFormName)
                    return { ...stage, pokemonData: pokemon.data }
                })
            )
            setStages(stagesWithData)
            // console.log(JSON.stringify(stagesWithData, null, 2))
        })
    }, [])


    return (
        <View style={styles.container}>
            {stages.map((stage, index) => {
                const imageLeft = index % 2 === 0
                return (
                    <Card
                        key={index}
                        containerStyle={[styles.card, { backgroundColor: typeColors[stage.pokemonData.types[0].type.name] }]}
                    >
                        <View style={[styles.row, { flexDirection: imageLeft ? 'row' : 'row-reverse' }]}>
                            <Image
                                source={{ uri: stage.pokemonData.sprites.other['official-artwork'].front_default }}
                                style={styles.image}
                            />
                            <View style={[styles.textBlock, { alignItems: imageLeft ? 'flex-end' : 'flex-start' }]}>
                                <Text style={styles.name}>{capitalize(stage.species.name)}</Text>
                                {stage.evolution_details[0] ? (
                                    <>
                                        <Text style={styles.detail}>Level: {stage.evolution_details[0]?.min_level ?? 'N/A'}</Text>
                                        <Text style={styles.detail}>Method: {capitalize(stage.evolution_details[0]?.trigger.name)}</Text>
                                    </>
                                ) : (
                                    <Text style={styles.detail}>Base form</Text>
                                )}
                            </View>
                        </View>
                    </Card>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-evenly',
    },
    card: {
        borderRadius: 12,
        marginHorizontal: 0,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 130,
        height: 130,
    },
    textBlock: {
        flex: 1,
        paddingHorizontal: 12,
        justifyContent: 'center',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 6,
    },
    detail: {
        fontSize: 18,
        color: '#fff',
    }
})

export default EvolutionsScreen