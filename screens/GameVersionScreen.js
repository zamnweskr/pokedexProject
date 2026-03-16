import { View, Text, Button } from 'react-native'

const GameVersionScreen = ({ navigation }) => {
    return(
        <View>
            <Button
                title='Gen 1'
                onPress={() => navigation.navigate('Home', { screen: 'Home', params: { generation: 1 } })}
            />
            <Button
                title='Gen 2'
                onPress={() => navigation.navigate('Home', { screen: 'Home', params: { generation: 2 } })}
            />
            <Button
                title='Gen 3'
                onPress={() => navigation.navigate('Home', { screen: 'Home', params: { generation: 3 } })}
            />
            <Button
                title='Gen 4'
                onPress={() => navigation.navigate('Home', { screen: 'Home', params: { generation: 4 } })}
            />
            <Button
                title='Gen 5'
                onPress={() => navigation.navigate('Home', { screen: 'Home', params: { generation: 5 } })}
            />
            <Button
                title='Gen 6'
                onPress={() => navigation.navigate('Home', { screen: 'Home', params: { generation: 6 } })}
            />
            <Button
                title='Gen 7'
                onPress={() => navigation.navigate('Home', { screen: 'Home', params: { generation: 7 } })}
            />
            <Button
                title='Gen 8'
                onPress={() => navigation.navigate('Home', { screen: 'Home', params: { generation: 8 } })}
            />
            <Button
                title='Gen 9'
                onPress={() => navigation.navigate('Home', { screen: 'Home', params: { generation: 9 } })}
            />
        </View>
    )
}

export default GameVersionScreen