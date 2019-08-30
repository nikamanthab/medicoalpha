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
import Pharm from "./container/pharm"
import Diag from "./container/testcenter"
import Home from "./container/home"

// import BleManager from 'react-native-ble-manager';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'


const AppSwitchNavigator = createSwitchNavigator({
    Home: {screen: Home},
    Pharm: {screen: Pharm },
    Diag : {screen: Diag},
});

const AppContainer = createAppContainer(AppSwitchNavigator)

class App extends Component{


  render(){
    return(
      <AppContainer />
    )
  }
}

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

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

