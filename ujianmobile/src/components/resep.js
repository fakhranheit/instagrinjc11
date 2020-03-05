import React from 'react';
import { View, Text, Button } from 'react-native'

const Resep = (props) => {
    return (
        <View>
            <Text>ini Resep</Text>
            <Button
                title='toggeldrawer'
                onPress={() => props.navigation.openDrawer()}
            />
        </View>
    )
}
export default Resep