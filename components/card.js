import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  Linking
} from 'react-native';
import axios from 'axios';
import storeimg from './../assets/store.jpg';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import Bubble from './bubble';


export default class App extends Component{
    render(){

        let list = <View></View>
        list = this.props.answer.tablet.map(ele=>{
            return (
                <Bubble
                // style={styles.white}
                text={ele}
                key={ele}
                />)
        })

        return(
            <View style={styles.main}>               
                <Card style={styles.cardstyle} isDark={true}>
                    <CardImage 
                    style={styles.image1}
                    source={storeimg} 
                    title={this.props.answer.loc}
                    />
                    <CardTitle
                    subtitle="Address 1"
                    />
                    {/* <CardContent text="chenna ngfhghjfjh nhvhhhj mbhjghjgjhgjhhjjkggkkkkkkkggggggggggggggggggggggggggggggi" /> */}
                    <Text style={styles.red}>Available tablets</Text>
                    <View style={styles.availablelist}>
                        {list}
                    </View>
                    <CardAction 
                    separator={true} 
                    inColumn={false}>
                    <CardButton
                        onPress={() => Linking.openURL('https://www.google.com/maps/search/?api=1&query=58.698017,-152.522067')}
                        title="Explore in map"
                        color="#FF6347"
                    />
                    </CardAction>
                </Card>
                
                </View>
        )
    }
};

const styles ={
    cardstyle:{
        backgroundColor:'#333333',
        borderRadius:10,
        marginBottom:10,
    },
    image1:{
        borderRadius:10
    },
    main:{
        // borderColor:"green",
        // borderWidth: 2,
    },
    availablelist:{
        padding:10,
        flexWrap:"wrap",
        flexDirection:"row"
    },
    white:{
        color:"white"
    },
    red:{
        // fontWeight:10,
        color:"#FF6347",
        padding:10
    }
}