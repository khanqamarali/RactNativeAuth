import React ,{ Component } from 'react'
import {  Text,View,TextInput  } from 'react-native';
import { Input, Button, CardSection,Card} from './common/';
import firebase from 'firebase'

class LoginForm extends Component {

    state = {email : '',password : '', error:''};

    onButtonPress()
    {
        const {email , password} = this.state;

        firebase.auth().signInWithEmailAndPassword(email,password).
        catch(()=>{

            firebase.auth().createUserWithEmailAndPassword(email,password)
                .catch(()=>
            {
                this.setState({ error : 'Error' });

            });
        });


    }


    render()
    {
        return(
            <Card>
                <CardSection>
                    <TextInput
                        placeholder={'email address'}
                        style = {styles.containerStyle} Value = {this.state.email}
                               onChangeText = { email => this.setState({email})} />

                </CardSection>
                <CardSection>
                    <TextInput placeholder={'Password'}
                               secureTextEntry={true}
                               autoCorrect={false}
                        style = {styles.containerStyle} Value = {this.state.password}
                    onChangeText = { password => this.setState({password})} />
                </CardSection>
                <Text>{this.state.error}</Text>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Login In </Button>
                </CardSection>
        </Card>

        );

    };

}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};


export default LoginForm;

