import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './login'
import Register from './register'
import Drawermain from './drawermain'

const Main = createStackNavigator()

const Mainstack = () => {
    return (
        <NavigationContainer>
            <Main.Navigator initialRouteName='Login'>
                <Main.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Main.Screen name='Register' component={Register} />
                <Main.Screen name='Drawermain' component={Drawermain} options={{ headerShown: false }} />
            </Main.Navigator>
        </NavigationContainer>
    )
}

export default Mainstack