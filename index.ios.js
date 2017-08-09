import React, { Component } from 'react';
import {AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import  App from './App';


export default class auth extends Component {
  render() {
    return (
     <View><App/></View>
    );
  }
}


AppRegistry.registerComponent('auth', () => auth);
