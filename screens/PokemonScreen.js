import { View, Text } from 'react-native'

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

export default PokemonScreen