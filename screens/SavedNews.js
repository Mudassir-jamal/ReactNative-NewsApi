import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  RefreshControl
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../Components/Card';
import SavedCard from '../Components/SavedCard';

const SavedNews = ({route, navigation}) => {
  const [loader, setLoader] = useState(false);
  const [data, setGetdata] = useState([]);
  const [newdata, setNewData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
      
      const unsubscribe = navigation.addListener('focus', () => {
          // do something
          getData();
          setLoader(true);
          setRefreshing(true)
        console.log('Hello World!')
    });
    return unsubscribe;
}, [navigation]);

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('DATA');
        // return jsonValue != null ? setGetdata(JSON.parse(jsonValue)) : null;
        if(jsonValue != null) {
            setGetdata(JSON.parse(jsonValue))
            console.log(jsonValue,"==================================")
            setRefreshing(false)
            setLoader(false)

        }
        
        
    } catch (e) {
        // error reading value
        console.log(e);
    }


};

if(!data){
    return null
}
  console.log(data, 'sved');
  //    const {data}  = route.params
  // console.log(data[0].des,"sved2")

  return (
    <View style={{height: '100%'}}>
      

      {data !== undefined ? (
        <>
          {loader ? (
            <View style={{alignItems:"center",justifyContent:"center" , height:"100%"}}>
              <ActivityIndicator size={70} animating={loader} />
            </View>
          ) : (
            <FlatList

            refreshControl={<RefreshControl refreshing={refreshing} getData={getData} />}
              removeClippedSubviews={true}
              data={data}
              keyExtractor={(item, index) => 'key' + index}
              renderItem={({item}) => {
                return <SavedCard item={item} />;
              }}
            />
          )}
        </>
      ) : <Text>noo</Text>}
    </View>
  );
};

export default SavedNews;
