import { Platform, StyleSheet, View, Image, Text } from "react-native"
import Constants from 'expo-constants'
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { Icon } from "react-native-elements"
import gengar from '../shared/img/gengar.png'
import HomeScreen from "./HomeScreen"
import PokemonScreen from "./PokemonScreen"
import MovesScreen from "./MovesScreen"
import AbilitiesScreen from "./AbilitiesScreen"
import GameVersionScreen from "./GameVersionScreen"
import EvolutionsScreen from "./EvolutionsScreen"

const Drawer = createDrawerNavigator()

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#d3a6c8'},
    headerTitleAlign: 'center'
}

const HomeScreenNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: 'Home',
                    headerLeft: () => (
                        <Icon
                            name='star'
                            type='font-awesome'
                            onPress={() => navigation.toggleDrawer()}
                            containerStyle={{ marginLeft: 10 }}
                        />
                    ) 
                })}
            />
            <Stack.Screen
                name='Pokemon'
                component={PokemonScreen}
            />
        </Stack.Navigator>
    )
}

const MovesScreenNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Moves'
                component={MovesScreen}
                options={({ navigation }) => ({
                    title: 'Moves',
                    headerLeft: () => (
                        <Icon
                            name='star'
                            type='font-awesome'
                            onPress={() => navigation.toggleDrawer()}
                            containerStyle={{ marginLeft: 10 }}
                        />
                    ) 
                })}
            />
        </Stack.Navigator>
    )
}

const AbilitiesScreenNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Abilities'
                component={AbilitiesScreen}
                options={({ navigation }) => ({
                    title: 'Abilities',
                    headerLeft: () => (
                        <Icon
                            name='star'
                            type='font-awesome'
                            onPress={() => navigation.toggleDrawer()}
                            containerStyle={{ marginLeft: 10 }}
                        />
                    ) 
                })}
            />
        </Stack.Navigator>
    )
}

const EvolutionsScreenNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Evolutions'
                component={EvolutionsScreen}
                options={({ navigation }) => ({
                    title: 'Evolutions',
                    headerLeft: () => (
                        <Icon
                            name='star'
                            type='font-awesome'
                            onPress={() => navigation.toggleDrawer()}
                            containerStyle={{ marginLeft: 10 }}
                        />
                    ) 
                })}
            />
        </Stack.Navigator>
    )
}

const GameVersionScreenNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Game Version'
                component={GameVersionScreen}
                options={({ navigation }) => ({
                    title: 'Game Version',
                    headerLeft: () => (
                        <Icon
                            name='star'
                            type='font-awesome'
                            onPress={() => navigation.toggleDrawer()}
                            containerStyle={{ marginLeft: 10 }}
                        />
                    ) 
                })}
            />
        </Stack.Navigator>
    )
}

const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
            <View style={{ flex: 1 }}>
                <Image source={gengar} style={styles.drawerImage}/>
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.drawerHeaderText}>PokeNav</Text>
            </View>
        </View>
        <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold' }} />
    </DrawerContentScrollView>
)

const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerContent={CustomDrawerContent}
                screenOptions={{
                    drawerStyle: { backgroundColor: '#fff'},
                    headerShown: true
                }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeScreenNavigator}
                    options={{
                        title: 'Pokemon',
                        headerShown: false,
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='star'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Moves'
                    component={MovesScreenNavigator}
                    options={{
                        title: 'Moves',
                        headerShown: false,
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='star'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Abilities'
                    component={AbilitiesScreenNavigator}
                    options={{
                        title: 'Abilities',
                        headerShown: false,
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='star'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Evolutions'
                    component={EvolutionsScreenNavigator}
                    options={{
                        title: 'Evolutions',
                        headerShown: false,
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='star'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Game Version'
                    component={GameVersionScreenNavigator}
                    options={{
                        title: 'Game Version',
                        headerShown: false,
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='star'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: '#d3a6c8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
})


export default Main