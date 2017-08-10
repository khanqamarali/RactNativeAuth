import React ,{ Component } from 'react'
import {  Text,View,TextInput,ActivityIndicator  } from 'react-native';
import { Input, Button, CardSection,Card,spinner} from './common/';
import firebase from 'firebase'

class LoginForm extends Component {

    state = {email : '',password : '', error:'', loading : false};

    onButtonPress()
    {

        const {email , password} = this.state;

        this.setState({ error : '', loading : true });

        firebase.auth().signInWithEmailAndPassword(email,password).then( ()=>{
                this.setState({ error : '', loading : false });

        }).
        catch(()=>{

            firebase.auth().createUserWithEmailAndPassword(email,password)
                .catch(()=>
            {
                this.setState({ error : 'Error', loading : false });


            });
        });

    }

    renderButton() {

        if (this.state.loading)
        {
            return ( <ActivityIndicator size="large" style = {styles.spinnerStyle}  />);
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>Login In </Button>
        );
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
                    {this.renderButton()}
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
    },

    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};


export default LoginForm;

