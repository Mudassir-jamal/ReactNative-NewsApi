import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

const Card = ({item,index,savedNews}) => {
    console.log(index)
  const [loading, setLoading] = useState(false);
  const [objSv, setObjSv] = useState({});


  const onLoading = value => {
    setLoading(value);
  };

  
    //  const savedNews = async (index) => {
    //    setObjSv(item)

    //     try {
    //       const jsonValue = JSON.stringify(objSv)
    //       await AsyncStorage.setItem('SAVED_NEWS', jsonValue)
    //     } catch (e) {
    //       // saving error
    //     }
    //   }

  


//   console.log(objSv , "=====>")

  return (
    <View style={styles.main}>
      <View style={styles.card_wrapper}>
        {loading && (
          <View style={{alignItems: 'center'}}>
            <ActivityIndicator color={'red'} size={40} />
          </View>
        )}
        <Text>{item.title}</Text>

        <View style={styles.img_contai}>
          <Image
            style={{height: '100%', width: '100%'}}
            onLoadStart={() => onLoading(true, 'onLoadStart')}
            onLoadEnd={() => onLoading(false, 'onLoadStart')}
            source={item.urlToImage ? {uri: item.urlToImage} : null}
          />
        </View>

        <TouchableOpacity
          style={{backgroundColor: 'gray'}}
          onPress={() => savedNews(index)}>
          <Text>Save News</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    paddingVertical: 10,
    // backgroundColor:"red"
  },

  card_wrapper: {
    borderWidth: 1,
    borderColor:"lightgary",
    width: '95%',
    padding:10,
    height: "auto",
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 4,
  },

  img_contai: {
    height: 200,
    width: '100%',
  },
});
export default Card;
