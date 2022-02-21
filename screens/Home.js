import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import BottomTabs from '../components/home/BottomTabs'

// Yelp API Fusion Key
const YELP_API_KEY = 'XVgJrNGDpOQovtwPEznvx41Z5HFvw0svu3F_JgEGVXcPsZzlwqWxP8VWzIAwypi50AxM6Sl_FRamT1f7foNnm_ZEnP9hLxTNuvb0jws5fLJiowIevNq1rfD06CvDYXYx';



const Home = () => {

  // Managing the states
  const [restaurantData, setRestaurantData] = useState(localRestaurants); 
  const [activeTab, setActiveTab] = useState("Delivery");

  // Fetches the data from the Yelp API
  const getRestaurantsFromYelp = () => {
    const url = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego';
  

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  };

    return fetch(url, apiOptions)
      .then(response => response.json())
      .then(json => setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase())
      )))
  }

  // Runs the getRestaurantsFromYelp function when the component mounts
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [activeTab])


  return (
    <SafeAreaView style={{marginTop: 40,backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData}/>
      </ScrollView>
      <BottomTabs />
      
    </SafeAreaView>
  )
}

export default Home