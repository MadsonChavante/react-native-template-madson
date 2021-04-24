import * as React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                onPress={() => navigation.navigate('Details')}
                title="Open Details"
            />
        </View>
    );
}

export default HomeScreen;