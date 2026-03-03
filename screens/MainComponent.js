import { Platform, StyleSheet, View, Image, Text, TouchableOpacity } from "react-native"
import Constants from 'expo-constants'
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { Icon } from 'react-native-elements'
import capitalize from '../utils/capitalize'
import typeColors from '../shared/typeColors'
import pokeball from '../shared/img/Poké_Ball_icon.svg.png'
import HomeScreen from "./HomeScreen"
import PokemonScreen from "./PokemonScreen"
import MovesScreen from "./MovesScreen"
import AbilitiesScreen from "./AbilitiesScreen"
import GameVersionScreen from "./GameVersionScreen"
import EvolutionsScreen from "./EvolutionsScreen"

const Drawer = createDrawerNavigator()

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#FF0000', height: 80 },
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
                        <TouchableOpacity
                            onPress={() => navigation.toggleDrawer()}
                            style={{ marginLeft: 10 }}
                        >
                            <Image source={pokeball} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                    )
                })}
            />
            <Stack.Screen
                name='Pokemon'
                component={PokemonScreen}
                options={({ route }) => ({
                    title: capitalize(route.params.pokemon.name),
                    headerStyle: [
                        styles.headerStyle,
                        { backgroundColor: typeColors[route.params.pokemon.types[0].type.name] }
                    ],
                    cardStyleInterpolator: ({ current }) => ({
                        cardStyle: {
                            opacity: current.progress
                        }
                    })
                })}

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
                        <TouchableOpacity
                            onPress={() => navigation.toggleDrawer()}
                            style={{ marginLeft: 10 }}
                        >
                            <Image source={pokeball} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
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
                        <TouchableOpacity
                            onPress={() => navigation.toggleDrawer()}
                            style={{ marginLeft: 10 }}
                        >
                            <Image source={pokeball} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
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
                        <TouchableOpacity
                            onPress={() => navigation.toggleDrawer()}
                            style={{ marginLeft: 10 }}
                        >
                            <Image source={pokeball} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
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
                        <TouchableOpacity
                            onPress={() => navigation.toggleDrawer()}
                            style={{ marginLeft: 10 }}
                        >
                            <Image source={pokeball} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
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
                <Image source={pokeball} style={styles.drawerImage} />
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
                paddingTop: Constants.statusBarHeight,
                backgroundColor: '#fff'
            }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerContent={CustomDrawerContent}
                screenOptions={{
                    drawerStyle: { backgroundColor: '#fff' },
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
        backgroundColor: '#FF0000',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        borderRadius: 20
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    headerStyle: {
        // backgroundColor: '#d3a6c8',
        shadowColor: 'transparent',
        elevation: 0,
        height: Platform.OS === 'ios' ? 80 : 80,
        borderBottomWidth: 0,
        borderTopRightRadius: 75,
        borderTopLeftRadius: 75
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