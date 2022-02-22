import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux'

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



const styles = StyleSheet.create({
    menuItemStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 20,
    },
  
    titleStyle: {
      fontSize: 19,
      fontWeight: "bold",
    },
  });
  



export default function MenuItems({
  restaurantName
}) {



  const dispatch = useDispatch();

  // Select the item that is selected
  const selectItem = (item, checkboxValue) => dispatch({
    type: 'ADD_TO_CART',
    payload: {
      ...item, 
      restaurantName: restaurantName,
      checkboxValue: checkboxValue
    },
    
  });


  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
    );

    const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={true}>
    {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox 
              iconStyle={{borderColor: 'lightgray', borderRadius: 5}}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              isChecked={isFoodInCart(food, cartItems)}
            />
            <FoodInfo food={food}/>
            <FoodImage image={food}/>
          </View>
          <Divider width={0.5} orientation="vertical" style={{marginHorizontal: 20}}/>
        </View>
    ))}
    </ScrollView>
  )
  
}

const FoodInfo = ({food}) => (
    <View style={{width: 240, justifyContent: 'space-evenly'}}>
      <Text style={styles.titleStyle}>{food.title}</Text>
      <Text >{food.description}</Text>
      <Text>{food.price}</Text>
    </View>
)

const FoodImage = ({image}) => (
  <Image
    source={{ uri: image.image}}
    style={{width: 100, height: 100, borderRadius: 8}} 
  />
)


