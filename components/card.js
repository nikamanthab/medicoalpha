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
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';


export default class App extends Component{
    render(){
        return(
            <View style={styles.main}>               
                <Card style={styles.cardstyle} isDark={true}>
                    <CardImage 
                    style={styles.image1}
                    source={{uri: `${this.props.img}`}} 
                    title={this.props.answer.name}
                    />
                    <CardTitle
                    subtitle="Address 1"
                    />
                    <CardContent text="chenna ngfhghjfjh nhvhhhj mbhjghjgjhgjhhjjkggkkkkkkkggggggggggggggggggggggggggggggi" />
                    {/* <View>
                        
                    </View> */}
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
        backgroundColor:'orange',
        borderRadius:10,
        marginBottom:10,
    },
    image1:{
        borderRadius:10
    },
    main:{
        // borderColor:"green",
        // borderWidth: 2,
    }
}