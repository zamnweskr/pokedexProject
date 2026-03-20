import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import gen1 from '../shared/genScreenArt/gen1.png'
import gen2 from '../shared/genScreenArt/gen2.png'
import gen3 from '../shared/genScreenArt/gen3.png'
import gen4 from '../shared/genScreenArt/gen4.png'
import gen5 from '../shared/genScreenArt/gen5.png'
import gen6 from '../shared/genScreenArt/gen6.png'
import gen7 from '../shared/genScreenArt/gen7.png'
import gen8 from '../shared/genScreenArt/gen8.png'
import gen9 from '../shared/genScreenArt/gen9.png'
import gen1boxArt from '../shared/boxArtImages/gen1boxArt.jpg'
import gen2boxArt from '../shared/boxArtImages/gen2boxArt.png'
import gen3boxArt from '../shared/boxArtImages/gen3boxArt.jpg'
import gen4boxArt from '../shared/boxArtImages/gen4boxArt.jpg'
import gen5boxArt from '../shared/boxArtImages/gen5boxArt.jpg'
import gen6boxArt from '../shared/boxArtImages/gen6boxArt.jpg'
import gen7boxArt from '../shared/boxArtImages/gen7boxArt.jpg'
import gen8boxArt from '../shared/boxArtImages/gen8boxArt.jpg'
import gen9boxArt from '../shared/boxArtImages/gen9boxArt.png'

const GameVersionScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
            <View>
                <Image source={gen1} style={styles.image} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', { generation: 1 })}>
                    <Text style={styles.buttonText}>Generation 1</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image source={gen2} style={styles.image} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', { generation: 2 })}>
                    <Text style={styles.buttonText}>Generation 2</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image source={gen3} style={styles.image} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', { generation: 3 })}>
                    <Text style={styles.buttonText}>Generation 3</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image source={gen4} style={styles.image} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', { generation: 4 })}>
                    <Text style={styles.buttonText}>Generation 4</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image source={gen5} style={styles.image} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', { generation: 5 })}>
                    <Text style={styles.buttonText}>Generation 5</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image source={gen6} style={styles.image} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', { generation: 6 })}>
                    <Text style={styles.buttonText}>Generation 6</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image source={gen7} style={styles.image} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', { generation: 7 })}>
                    <Text style={styles.buttonText}>Generation 7</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image source={gen8} style={styles.image} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', { generation: 8 })}>
                    <Text style={styles.buttonText}>Generation 8</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image source={gen9} style={styles.image} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', { generation: 9 })}>
                    <Text style={styles.buttonText}>Generation 9</Text>
                </TouchableOpacity>
            </View>



            {/* <TouchableOpacity
                onPress={() => navigation.navigate('Home', { generation: 1 })}
            >
                <Image source={gen1boxArt} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home', { generation: 2 })}
            >
                <Image source={gen2boxArt} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home', { generation: 3 })}
            >
                <Image source={gen3boxArt} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home', { generation: 4 })}
            >
                <Image source={gen4boxArt} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home', { generation: 5 })}
            >
                <Image source={gen5boxArt} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home', { generation: 6 })}
            >
                <Image source={gen6boxArt} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home', { generation: 7 })}
            >
                <Image source={gen7boxArt} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home', { generation: 8 })}
            >
                <Image source={gen8boxArt} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home', { generation: 9 })}
            >
                <Image source={gen9boxArt} style={styles.image} />
            </TouchableOpacity> */}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        marginVertical: 10,
        borderRadius: 8,
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: '#ff0000',
        padding: 12,
        borderRadius: 8,
        alignSelf: 'center',
        paddingHorizontal: 40,
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default GameVersionScreen