
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './pages/home';
import DetailsScreen from './pages/details';
import SettingsScreen from './pages/settings';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: 'tomato',
                tabBarinactiveTintColor: 'gray',
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home-variant'
                            : 'home-variant-outline';
                    } else if (route.name === 'Details') {
                        iconName = focused ? 'account-details' : 'account-details-outline';
                    }else if (route.name === 'Settings') {
                        iconName = focused ? 'cog' : 'cog-outline';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
};

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="MainStackScreen" component={MainStackScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;