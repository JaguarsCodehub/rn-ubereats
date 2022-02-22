import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetail/About'
import { Divider } from 'react-native-elements'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

export default function RestaurantDetail({route, navigation}) {
  return (
    <View>
        <About route={route} />
        <Divider width={1.8} style={{marginVertical: 20}}/>
        <MenuItems restaurantName={route.params.name}/>
        <ViewCart restaurantName={route.params.name} navigation={navigation}/>
    </View>
  )
}