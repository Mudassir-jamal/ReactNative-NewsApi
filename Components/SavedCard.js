import React from 'react'
import { View, Text ,StyleSheet , Image} from 'react-native'

export default function SavedCard({item}) {
    console.log(item,"ssbbssbsb")
    return (
        <View style={{height:"100%", backgroundColor:"gray" , alignItems:"center", paddingVertical:20}}>
            <View style={styles.contai}>
              
              <Text>{item.title}</Text>
              <Text>item.author</Text>
                

              {/* <View style={styles.img_contai}>
          <Image
            style={{height: '100%', width: '100%'}}
            // onLoadStart={() => onLoading(true, 'onLoadStart')}
            // onLoadEnd={() => onLoading(false, 'onLoadStart')}
            source={item.urlToImage ? {uri: item.urlToImage} : null}
          />
        </View> */}

              <Text>item.date</Text>

            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contai : {
        height:"auto",
        borderWidth:1,
        borderColor:"red",
        width:"95%"

    },

    img_contai : {
        width:"100%"
    },


})