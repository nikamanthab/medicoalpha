import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import axios from 'axios';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';


export default class App extends Component{
    render(){
        return(
            <View>               
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
                        onPress={() => {}}
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
        backgroundColor:'black',
        borderRadius:10
    },
    image1:{
        borderRadius:10
    }
}