/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  PermissionsAndroid,
  TouchableHighlight,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import BleManager from 'react-native-ble-manager';

class App extends Component{

    startScan() {
      BleManager.scan(["80-2B-F9-C6-A6-1F"], 10, true).then((results) => {
        console.log('Scanning...');
        console.log(results);
      });
    }

  componentDidMount(){
 
    BleManager.start({showAlert: false}).then(() => {
    // Success code
    console.log('Module initialized');
  });

  console.log(Platform);

  if (Platform.OS === 'android' && Platform.Version >= 23) {
            PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
                if (result) {
                  console.log("Permission is OK");
                } else {
                  PermissionsAndroid.requestPermission(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
                    if (result) {
                      console.log("User accept");
                    } else {
                      console.log("User refuse");
                    }
                  });
                }
          });
        }

  }

  render(){
    return(
      <View style={{justifyContent:'center'}}>
        <Text style={{textAlign: 'center'}}>
           Hi there!!
        </Text>
        <TouchableHighlight style={{marginTop: 40,margin: 20, padding:20, backgroundColor:'#ccc'}} onPress={() => this.startScan()}>
          <Text> Scan!!</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

// import React, {Component} from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   TouchableHighlight,
//   NativeAppEventEmitter,
//   NativeEventEmitter,
//   NativeModules,
//   Platform,
//   PermissionsAndroid,
//   ListView,
//   FlatList,
//   ScrollView,
//   AppState,
//   Dimensions,
// } from 'react-native';
// import BleManager from 'react-native-ble-manager';

// const window = Dimensions.get('window');
// const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

// const BleManagerModule = NativeModules.BleManager;
// const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

