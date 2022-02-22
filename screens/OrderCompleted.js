import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import firebase from 'firebase/compat';
import MenuItems from '../components/restaurantDetail/MenuItems';


export default function OrderCompleted() {


    const [lastOrder, setLastOrder] = useState({
        items: [
            {
              title: "Bologna",
              description: "With butter lettuce, tomato and sauce bechamel",
              price: "$13.50",
              image:
                "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
            },
          ],
    })


  // Select the item from the store that is selected and the total price of the cart items.
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  // Total price of the cart
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  
  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });





  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{marginTop: 40, flex: 1, backgroundColor: 'white'}}>
        {/* Green Checkmark */}
        <View  style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}>
        <LottieView 
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginHorizontal: 50, textAlign: 'center' }}>
          Your order at {restaurantName} has been placed for ${total}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuItems 
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
        />
        {/* Cooking animation */}
        <LottieView
                style={{ height: 200, alignSelf: "center", marginBottom: 50 }}
                source={require("../assets/animations/cooking.json")}
                autoPlay
                speed={0.5}
        />
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}