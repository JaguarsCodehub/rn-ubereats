import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { createStackNavigator } from '@react-navigation/stack';

// Redux imports 
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/store';
import OrderCompleted from './screens/OrderCompleted';

const store = configureStore();

export default function RootNavigation() {

  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                <Stack.Screen name='OrderCompleted' component={OrderCompleted} />
            </Stack.Navigator>
        </NavigationContainer>
    </ReduxProvider>
  )
}