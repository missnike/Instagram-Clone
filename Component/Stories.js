import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Stories = () => {
    const  storiesData =[
        {
            id : 1,
            image :require('../assets/images/image1.jpg'),
            name: 'Your Story'
        },
        {
            id : 2,
            image :require('../assets/images/image2.jpg'),
            name: 'Favour'
        },
        {
            id : 3,
            image :require('../assets/images/image3.jpg'),
            name: 'David'
        },
        {
            id : 4,
            image :require('../assets/images/image4.jpg'),
            name: 'Dolapo'
        },
        {
            id : 5,
            image :require('../assets/images/image5.jpg'),
            name: 'Damola'
        },
        {
            id : 6,
            image :require('../assets/images/image6.jpg'),
            name: 'Onikepo'
        },
        
    ];
    return(
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{paddingLeft:10}}
        >
        {
            storiesData.map ((data, index) => {
              return(
                <View key={index} style={{ marginVertical: 10}}>
                <View  style={styles.container}>
        <Image source={data.image} style={{ height:65, width: 65, borderRadius:100}}/>
       {data.id ==1?
    <View style={styles.iconAddCtn}>
        <AntDesign name="pluscircle"  size={14} color="#fff"/>
        </View>
        : null 
    }
        <View> 
        </View>

        </View>
        <Text style={{fontSize: 14, color:'#000', textAlign:'center'}}>{data.name}</Text>
                </View>
    
              )
            }
            )
          }
         
          </ScrollView>
           )
}







export default Stories

const styles = StyleSheet.create({
    container: {
        height: 74,
        width: 74,
        borderRadius:100,
        borderWidth: 2,
        borderColor: 'purple',
        marginRight: 12,
        justifyContent:'center',
        alignItems: 'center'

    },
    iconAddCtn: {
        height: 20,
        width: 20,
        borderRadius: 100,
        backgroundColor: 'blue',
        position: 'absolute',
        bottom: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',


    },
})