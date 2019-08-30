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
                    title={this.props.name}
                    />
                    <CardTitle
                    subtitle="Number 6"
                    />
                    <CardContent text="chenna ngfhghjfjh nhvhhhj mbhjghjgjhgjhhjjkggkkkkkkkggggggggggggggggggggggggggggggi" />
                    <CardAction 
                    separator={true} 
                    inColumn={false}>
                    <CardButton
                        onPress={() => Linking.openURL('https://www.google.com/maps/search/?api=1&query=58.698017,-152.522067')}
                        title="Share"
                        color="#FF6347"
                    />
                    <CardButton
                        onPress={() => {}}
                        title="Explore"
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