import React from 'react';
import Home from './home'
import Resep from './resep'
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()
const Tabnavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home'
                    } else {
                        iconName = focused ? 'add-box' : 'add-box'
                    }
                    return <Icon name={iconName} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                activeTintColor: 'salmon',
                inactiveTintColor: 'gray',
                showLabel: false,
            }}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Resep' component={Resep} />
        </Tab.Navigator>
    )
}
export default Tabnavigation