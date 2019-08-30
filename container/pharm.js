import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  Dimensions
} from 'react-native';
import searchlogo from './../assets/search.jpg';
import SearchBar from 'react-native-search-bar'
import axios from 'axios';
import Card from './../components/card';
import Bubble from './../components/bubble';

export default class App extends Component{

    state = {
        search:"search here!!",
        elements: []
    }

    handleText = (text)=>{
        this.setState({
            search:text
        })
    }

    handleAdd = ()=>{
        let s = this.state;
        let newArray = s.elements;
        newArray.push(s.search)
        this.setState({
            search: "",
            elements: newArray
        })
    }

    render(){

        let bubs = <View></View>
        if(this.state.elements.length!==0){
            console.log(this.state.elements);
            bubs = this.state.elements.map( ele=>{
                return(
                    <Bubble
                    key={ele}
                    text={ele}
                    />
                    )
                })
            }

        return(
            <View style={styles.panel}>
                <View style={styles.searchele}>
                    <TextInput 
                       style={styles.searchbox}
                        onChangeText={(text)=>this.handleText(text)}
                        value={this.state.search}/>
                        <TouchableOpacity 
                        style={styles.addbutton}
                        onPress={this.handleAdd}>
                            <Text style={styles.add}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={styles.addbutton}
                        onPress={this.handleAdd}>
                            <Image source={searchlogo}
                                style={styles.image1}                                
                            />
                        </TouchableOpacity>
                </View>
                <View style={styles.bubbleview}>
                    {bubs}
                </View>
                <ScrollView style={styles.scroll}>
                    <Card
                        name="pharm1"
                        img="http://bit.ly/2GfzooV"
                        /> 
                </ScrollView>
            </View>
        )
    }
};

const styles = {
    scroll:{
        // marginTop:10,
        padding:20
    },
    searchele:{
        flexDirection:"row",
        margin:10
    },
    searchbox:{
        width:Dimensions.get('window').width*0.65,
        height:40,
        borderColor:'gray',
        borderWidth:1,
        // shadowColor:'#000',
        // shadowOffset: {width: 0, height: 3},
        // shadowOpacity: 0.3,
        // elevation: 1,
        borderRadius:30
    },
    addbutton:{
        width:Dimensions.get('window').width*0.11,
        height:40,
        backgroundColor:"red",
        borderRadius:40,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:10
    },
    add:{
        color:"white",
        fontSize:35,
        // textAlign:"center"
    },
    bubbleview:{
        flexDirection:"row",
        flexWrap:"wrap",
        // padding:5
    },
    image1:{
        height:30,
        width:30
    },
    panel:{
        backgroundColor:"black"
    }
}