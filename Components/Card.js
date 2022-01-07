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

const Card = ({item, index, savedNews}) => {
  // console.log(index)
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
        <View style={styles.img_contai}>
          <Image
            style={{height: '100%', width: '100%'}}
            onLoadStart={() => onLoading(true, 'onLoadStart')}
            onLoadEnd={() => onLoading(false, 'onLoadStart')}
            source={item.urlToImage ? {uri: item.urlToImage} : null}
          />
        </View>

        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.bottom}>
          <View>
            <Text style={styles.author}>{item.author}kk</Text>
          </View>

          <TouchableOpacity style={styles.btn} onPress={() => savedNews(index)}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}>
              Save News
            </Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor:"black",
    // borderWidth: 1,
    // borderColor: 'lightgary',
    width: '95%',
    height: 'auto',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'white',
    borderBottomEndRadius : 8,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    borderBottomStartRadius: 8,
    borderBottomLeftRadius:8,
    borderBottomRightRadius:8,
    shadowColor: "white",
// shadowOffset: {
// 	width: 0,
// 	height: 12,
// },
    elevation: 60,
    overflow:"hidden"
  },

  img_contai: {
    height: 200,
    width: '100%',
  },

  title: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    lineHeight: 15,
    marginTop: 10,
    padding:10,
    color:"white"
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap:"wrap",
    alignItems:"center",
    marginTop: 25,
    padding: 10,
  },

  btn: {
    backgroundColor: 'darkred',
    height:40,
    alignItems:"center",
    justifyContent:"center",
    width:100,
    borderRadius:8
  },

  author: {
    fontSize: 12,
    color:"white"
  },
});
export default Card;
