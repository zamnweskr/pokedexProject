import { View, Text } from 'react-native'
import RenderPokemon from '../features/RenderPokemon'

const PokemonScreen = ({ route }) => {
    const { pokemon } = route.params
    return(
        <View>
            <RenderPokemon
                pokemon={pokemon}
            />
        </View>
    )
}

export default PokemonScreen