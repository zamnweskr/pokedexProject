import { Button, View, Text } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return(
        <View
            style={{ 
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text>
                This is the Home Screen where you will see the pokemon
            </Text>
            <Button
                title='This will be the Pokemon'
                onPress={() => navigation.navigate('Pokemon')}
            />
        </View>
    )
}

export default HomeScreen