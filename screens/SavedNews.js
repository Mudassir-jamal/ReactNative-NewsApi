import React,{useEffect , useState} from 'react'

import { View, Text , FlatList ,ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../Components/Card';
import SavedCard from '../Components/SavedCard';


const SavedNews = ({route,navigation}) => {
    
    const [loader, setLoader] = useState(false);
    const [data , setGetdata] = useState([])
    const [newdata , setNewData] = useState([])
    
    
    useEffect(() => {
        setLoader(true)
        getData() 
        // setNewData(data.d)
        // importData()       
    },[])


    
    
            const getData = async () => {

                try {
                    const jsonValue = await AsyncStorage.getItem('DATA')
                   
                    if(jsonValue != null){
                        JSON.parse(jsonValue)
                        console.log({jsonValue},".....................")

                        // setGetdata({jsonValue})
                        
                        setLoader(false)
                    }
                    else{
                        console.log("beta")
                    }
                } catch(e) {
                    // error reading value
                    console.log(e)
                }
                // console.log(data,"sved")
              }
//    const {data}  = route.params
    console.log(data,"sved")

    return (
        <View style={{height:"100%" }}>

            {/* {data !== undefined ?
            <ActivityIndicator size={80} color="blue" animating={loader} />


            : 
            
            } */}
            {/* {
            data.d.map((e ,i)=> {
                return <View key={i}>
                   
                    <SavedCard item={e}/>
                </View>
            }) 
            
        } */}


          
            {data == undefined ?
              
              <Text>nhkjn</Text>
              
              :
              <>
              
              {/* <Text>{data.jsonValue[0].title}</Text> */}
              {/* <FlatList
            
            data={data.jsonValue}
            keyExtractor={(item, index) => 'key' + index}
            
            renderItem={({item}) => {
                return (
                    
                    <SavedCard item={item}/>
                    // <Card  item={item}/>
                    
                    
                    
                    );
                }}
                />
                </> */}

                </>

        }
        </View>
    )
}

export default SavedNews
