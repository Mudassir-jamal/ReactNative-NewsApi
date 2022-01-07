import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function SavedCard({item}) {
  console.log(item, 'ssbbssbsb');
  const [loading, setLoading] = useState(false);

  const onLoading = value => {
    setLoading(value);
  };

  return (
    <View style={styles.main}>
      <View style={styles.card_wrapper}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>DATE : {item.date}</Text>
          <View>
              
          </View>
        <View style={styles.img_contai}>
          <Image
            style={{height: '100%', width: '100%'}}
            onLoadStart={() => onLoading(true, 'onLoadStart')}
            onLoadEnd={() => onLoading(false, 'onLoadStart')}
            source={item.img ? {uri: item.img} : null}
          />
        </View>
        <Text style={styles.des}>{item.des}</Text>
        <Text style={styles.author}>AUTHOR : {item.author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    paddingVertical: 20,
    // backgroundColor:"red"
  },

  contai: {backgroundColor: 'Red'},

  card_wrapper: {
    borderWidth: 1,
    borderColor: 'lightgary',
    width: '95%',
    //   padding:10,
    height: 'auto',
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor:"white"
  },

  title : {
      padding:10,
      fontWeight:"bold",
      lineHeight:25,
      fontSize:20
  },

  date : {
      padding:10,

  },

  img_contai: {
    height: 200,
    width: '100%',
  },

  des : {
      padding:10,
      lineHeight:20,
      fontWeight:"600",
      letterSpacing:1
  },

  author:{
      paddingTop:15,
      paddingLeft:10,
      paddingBottom:5,

      fontWeight:"bold",

  },
});
