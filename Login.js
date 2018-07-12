import React, { Component } from 'react';
import {Text } from 'react-native';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Login extends Component{
  render(){
    return(
      <View>
      <TouchableOpacity>
      <Text>Login</Text>
      </TouchableOpacity>
      </View>
    );
  }
}
