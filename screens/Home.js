import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from 'react-native';
import Card from '../Components/Card';
import News from './News';
import newAPI from '../Components/Api';

export default function Home({navigation}) {
  const [jsondata, setJsonData] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [svObj, setSvObj] = useState([]);


  useEffect(() => {
    // const key = "6bcbed0c764f48ffb5db2cfab95b3d93"
    // async function fetchData() {
    //     const value = await AsyncStorage.getItem(DATA);
    //     const arrayData = JSON.parse(value);
    //     console.log(arrayData);
    //     // setData(arrayData);
    //   }
    //   fetchData();

    setLoader(true);
    getNewsFromAPI();
  }, []);

  function getNewsFromAPI() {
    newAPI
      .get('top-headlines?country=us&apiKey=6bcbed0c764f48ffb5db2cfab95b3d93')
      .then(async function (response) {
        setJsonData(response.data);
        setLoader(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (!jsondata) {
    return null;
  }

  const savedNews  = async (index) => {
    let d = jsondata.articles[index];
    console.log(d,"===>")
    setSvObj([...svObj,
        {title : d.title,
         author : d.author,
         img : d.urlToImage,
         date : d.publishedAt,
         des : d.description
        
        }])
    // console.log(d,"dd");

     try {
       const jsonValue = JSON.stringify(svObj)
       await AsyncStorage.setItem('DATA', jsonValue)

       alert("News Saved..!")
     } catch (e) {
        console.log(e,"sv")
        // saving error
     }
  };


  console.log(svObj,"DATA sVED")



  // const getData = async (SAVED_NEWS) => {
    
  //   try {
  //       const jsonValue = await AsyncStorage.getItem('DATA')
       
  //       if(jsonValue != null){
  //           JSON.parse(jsonValue)
  //           console.log(jsonValue)

  //           // navigation.navigate("SavedNews" , {data : jsonValue})

  //       }
  //       else{
  //           console.log("beta")
  //       }
  //   } catch(e) {
  //       // error reading value
  //       console.log(e)
  //   }
  // }
  

    // console.log(svObj, 'kkk');
  return (
    <View style={{backgroundColor:"black"}}>
      {jsondata !== undefined ? (
        <>
          <View>
            {loader ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}>
                <ActivityIndicator size={80} color="red" animating={loader} />
              </View>
            ) : (
              <>
               {/* <TouchableOpacity onPress={() => getData()}><Text>cccc</Text></TouchableOpacity> */}
                <FlatList
                  // showsVerticalScrollIndicator={false}
                  // removeClippedSubviews

                  data={jsondata.articles}
                  keyExtractor={(item, index) => 'key' + index}
                  // index={index}
                  renderItem={({item, index}) => {
                    return (
                      <ScrollView showsHorizontalScrollIndicator={false}>
                        <Card item={item} index={index} savedNews={savedNews} />
                      </ScrollView>
                    );
                  }}
                />
              </>
            )}
          </View>
        </>
      ) : null}

      {/* <View style={{alignItems: 'center', paddingVertical: 20}}>
      <TouchableOpacity
      onPress={() => set()}
      style={{backgroundColor: 'gray'}}>
      <Text>News</Text>
      </TouchableOpacity>
      
    </View> */}
    </View>
  );
}
