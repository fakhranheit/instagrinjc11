import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native'
import { CommonActions } from '@react-navigation/native';

const Login = (props) => {
    useEffect(() => {
        const resetAction = CommonActions.reset({
            index: 0,
            routes: [
                { name: 'Drawermain' }
            ]
        });
        props.navigatioin.dispatch(resetAction)
    }, [])

    return (
        <View>
            <Text>ini Login</Text>
            <Button
                title='Register'
                onPress={() => props.navigation.navigate('Register', { nama: 'bebas' })}
            />
            <Button
                title='Home'
                onPress={() => props.navigation.navigate('Drawermain', { nama: 'bebas' })}
            />

        </View>
    )
}
export default Login