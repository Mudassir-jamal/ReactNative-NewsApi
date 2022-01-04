import React, { useEffect ,useState} from 'react'
import { Text, View ,ActivityIndicator } from 'react-native'
import AppNavigation from './Navigation/Navigations'



const  App = () =>{

    return (
      <View style={{height:"100%"}}>
      {/* <ActivityIndicator size="large" color="#0000ff" animating={true} /> */}
         


        <AppNavigation />
        {/* <MyTabs /> */}
        
      {/* <ActivityIndicator size="large" color="#0000ff" animating={false} /> */}




      </View>
    )
  }
export default App