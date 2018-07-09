import React, {Component} from 'react'
import {View,Text,StyleSheet,Button,KeyboardAvoidingView,TouchableWithoutFeedback,keyboard,TextInput,TouchableOpacity} from 'react-native'
import{Container,Header,Left,Right,Icon,Item,Label,Input} from 'native-base'


export default class LoginScreen extends Component{
   
render(){
    return(
        <Container>
<Header style={{backgroundColor:'white'}}>
    <Left>
    <Text style={styles.title}>Đăng Nhập</Text>
    </Left>
    <Right>
        <Icon name='md-basket' style={{marginRight:16}}/>
    </Right>
        
        </Header>
        <View style={{flex:1,paddingLeft:40,paddingRight:40}}>
            <View style={{flex:25,backgroundColor:'red'}}>
            <Text style={styles.logo}>OMINEXT</Text>
            </View>

            <View style={{flex:40,backgroundColor:'white'}}>
                <KeyboardAvoidingView>
                  {/* //  <TouchableWithoutFeedback onpress={keyboard.dismiss}> */}
                    <Item stackedLabel style={{paddingLeft:30}} >
                    <Icon active name='homes' style={{paddingLeft:30}} />
                    <Label>Username</Label>
                    <Input
                    keyboardType='email-address'
                    returnKeyType='next'
                    autoCorrect={false} />
                    </Item>
                    <Item stackedLabel last style={{paddingLeft:30}} >
                    <Icon active name='home'  style={{paddingLeft:30}}/>
                    <Label>Password</Label>
                    <TextInput secureTextEntry />
                    </Item>
                    <Label>* tài khoản và mật khẩu không hợp lệ</Label>
                  {/* //  </TouchableWithoutFeedback> */}
                    </KeyboardAvoidingView>
                   
                    <TouchableOpacity style={{paddingVertical:10, backgroundColor:'blue'}}>
                        <Text style={styles.TextButton}>Singin</Text>
                    </TouchableOpacity>
                        
                
            </View>

            <View style={{flex:25,}}>
                
            </View>
            
            <View style={{flex:10,backgroundColor:'white'}}>
                <Text style={styles.textBottom}>Quên mật khẩu</Text>
            </View>    
        </View>
        </Container>
        
    );
}
}
const styles=StyleSheet.create({
title:{
    color:'blue',
    fontSize:19,
    marginLeft:16,
    },
    logo:{
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    textBottom:{
        textDecorationLine:'underline',
        textAlign:'center',
        color:'black'
    },
    TextButton:{
        color:'white',
        textAlign:'center'
    }
   
})