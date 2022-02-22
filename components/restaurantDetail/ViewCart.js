import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';


const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.8)",
    },

    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
    },

    restaurantName: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 18,
      marginBottom: 10,
    },

    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
      padding: 20
    },

    subtotalText: {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: 20,
      marginBottom: 10,
    },
  });

export default function ViewCart({}) {


  // State
  const [modalVisible, setModalVisible] = React.useState(false);


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



  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>${totalUSD}.00</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "#00B76A",
                  alignItems: "center",
                  justifyContent: 'center',
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: "relative",
                }}
                onPress={() => {
                  // addOrderToFireBase();
                  setModalVisible(false);
                }}
              >
                <Text style={{ color: "white", fontSize: 18, right: 20, fontWeight: 'bold' }}>Checkout :</Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 60,
                    color: "white",
                    fontSize: 15,
                    fontWeight: 'bold',
                    top: 17,
                    textAlign: 'center'
                  }}
                >
                  ${total ? totalUSD : ""}.00
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    )
  }



  return (
    <>
    <Modal 
      animationType='slide' 
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => setModalVisible(false)}
    > 
      {checkoutModalContent()}
    </Modal>
    {total ? (
      <View style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          position: 'absolute',
          bottom: -100,
          zIndex: 999,
      }}>
            <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
            <TouchableOpacity 
                style={{
                    marginTop: 20,
                    backgroundColor: 'black',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    padding: 15,
                    borderRadius: 30,
                    width: 200,
                    position: 'relative'
                }}
                  onPress={() => setModalVisible(true)}
              >
                <Text style={{color: 'white', fontSize: 20, marginRight: 10}}>
                  ViewCart :
                </Text>
                <Text style={{color: 'white', fontSize: 18, marginRight: 30}}>${totalUSD}</Text>
            </TouchableOpacity>
            </View>
      </View> 
     ) : (
        <></>
     )}
    </>
  );
}