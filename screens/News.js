import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Card from '../Components/Card';
// import News2 from './News2'

export default function News({route, navigation}) {
  const {datas} = route.params;
  console.log(datas, 'niiii');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    // if(datas == undefined){
    //     setLoader(true)
    // }
    // else{setLoader(false)}
  }, []);

  return (
    <View>
      <ActivityIndicator size="large" color="#0000ff" animating={loader} />

      {datas !== undefined ? (
          <>
          {/* <Text>{datas[0].title}</Text>
          <Text>{datas[0].author}</Text>
        <Text>{datas[0].title}</Text> */}
        {/* {datas.map((e,i) => {
            return <Card item = {e}/>
        })} */}

        <Card />
      <View style={{backgroundColor: 'red'}}>

  
      </View>

        </>
      ) : null} 

             {/* <FlatList
                    style={{height: '100%'},{width:"100%"}}
                    data={datas}
                    keyExtractor={(item,index) =>'key' + index}
                    renderItem={({ item }) => {
                        return <Card item ={item}/>
                    }
                        
                     
                        }
                /> */}

            

    </View>
  );
}
