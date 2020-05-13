import React, { Component } from "react";
import {
    View,
    Text,
} from 'react-native';

class LoginScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'About Us',
            headerStyle: {
                backgroundColor: '#f77f00',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        };
    }
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>Name: {navigation.getParam('name', 'No Name')}</Text>
            </View>
        )
    };
}

export default LoginScreen;