import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetail/About'
import { Divider } from 'react-native-elements'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'



const foods = [
  {
      title: 'Chicken 🍗',
      description: 'Chicken is a type of bird in the genus Corvus (raven), a genus of birds',
      price: '$10.00',
      image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
      title: 'Paneer Pizza 🍕',
      description: 'Paneer is a type of meat in the genus Meusiana (pig)',
      price: '$30.00',
      image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFuZWVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
      title: 'Chicken Momos 🍥',
      description: 'Chicken Momos are steamed momos made with chicken which are very loved in India',
      price: '$40.00',
      image: 'https://images.unsplash.com/photo-1626776877184-84cadaef8d09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9tb3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  
]

export default function RestaurantDetail({route, navigation}) {
  return (
    <View>
        <About route={route} />
        <Divider width={1.8} style={{marginVertical: 20}}/>
        <MenuItems restaurantName={route.params.name} foods={foods}/>
        <ViewCart navigation={navigation}/>
    </View>
  )
}