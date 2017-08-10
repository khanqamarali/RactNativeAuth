import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import firebase from 'firebase'
import { Header,Button,Card,CardSection } from "./src/component/common/index";
import LoginForm from './src/component/LoginForm'



export default class  App extends Component {
    state = { loggedIn: null };
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

        firebase.auth().onAuthStateChanged((user)=> {
            if (user)
            {
                this.setState({loggedIn: true });
            }
            else
            {
                this.setState({loggedIn: false });
            }

        });

    }


   renderButton()
   {
       if(this.state.loggedIn)
       {
         return (
            <Card><CardSection>
             <Button onPress={()=> firebase.auth().signOut()} >Logout
           </Button>
            </CardSection></Card>
         );
       }
       else
       {
          return(<LoginForm/>);
       }

   }

 render()
  {
     return (
         <View>
             <Header headerText= { 'Authentication'} />
             {this.renderButton()}
         </View>
     );
  }
};
