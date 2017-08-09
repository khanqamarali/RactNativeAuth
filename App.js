import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import firebase from 'firebase'
import { Header } from "./src/component/common/index";
import LoginForm from './src/component/LoginForm'


export default class  App extends Component {
    componentWillMount()
    {
        var config = {
            apiKey: "AIzaSyCyLlLkNx4GBp74vP6nThdHiLTzzMO_sbw",
            authDomain: "nativeauth-5a991.firebaseapp.com",
            databaseURL: "https://nativeauth-5a991.firebaseio.com",
            projectId: "nativeauth-5a991",
            storageBucket: "nativeauth-5a991.appspot.com",
            messagingSenderId: "291774446226"
        };
        firebase.initializeApp(config);

    }


 render()
  {
     return (
         <View>
             <Header headerText= { 'Authentication'} />
             <LoginForm/>
         </View>
     );
  }
};
