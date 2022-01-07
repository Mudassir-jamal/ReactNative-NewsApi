import React, { useEffect ,useState} from 'react'
import { Text, View ,ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import AppNavigation from './Navigation/Navigations'
import News from "./Assets/logo.png"


const  App = () =>{

  const [startApp , setStartApp] = useState(false)

    return (
      <View style={{height:"100%"}}>
      {/* <ActivityIndicator size="large" color="#0000ff" animating={true} /> */}
         
         {startApp ?
         <AppNavigation />
         :
        
         <View style={{width:"100%", height:"100%",alignItems:"center",justifyContent:"center"}}>

         <Image source={News} width={"100%"} style={{height:100, width:100}} />
           
           <TouchableOpacity style={{
                                    backgroundColor:"black", 
                                    width:"90%",
                                    marginTop:20,
                                    height:40,
                                    borderRadius:8,
                                    justifyContent:"center",
                                    alignItems:"center"
                                    
                                    }} onPress={() => setStartApp(true)}>
             <Text style={{color:"white",fontWeight:"bold", fontSize:20,letterSpacing:2}}>Start</Text>
           </TouchableOpacity>
         </View>
         
         
         }


        {/* <MyTabs /> */}
        
      {/* <ActivityIndicator size="large" color="#0000ff" animating={false} /> */}




      </View>
    )
  }
export default App