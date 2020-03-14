import React, { Component } from 'react';
import {TouchableOpacity,StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import CircleButton from 'react-native-circle-button';
class StartPage extends Component {

    show = ()=>{
        this.props.navigation.navigate('Newsfeed');

        }

        logout = async  () => {
            await AsyncStorage.clear();
       }

        componentDidMount(){
            this.logout();
        }
    
        
 render(){
 return (
         
<View style = {{ flex : 1,justifyContent:'space-evenly'}}> 
     {/* <CircleButton size ={105} onPressButtonTop={() =>this.show()} /> */}
     <Text style={styles.title}> Chittr App </Text>
     <TouchableOpacity  style = {styles.buttonStyle}
    onPress={() =>this.props.navigation.navigate('Signup')}>
<Text style={styles.textStyle}>
        Create an account
    </Text>
    </TouchableOpacity>

    <TouchableOpacity  style = {styles.buttonStyle}
    onPress={() =>this.props.navigation.navigate('Login')}>
    <Text style={styles.textStyle}>
    Login
    </Text>
    </TouchableOpacity>

    <TouchableOpacity  style = {styles.singleButton}
    onPress={() =>this.props.navigation.navigate('RecentChits')}>
    <Text style={styles.textStyle}>
    View recent chits
    </Text>
    </TouchableOpacity>
 </View>
 );
 }
}
export default StartPage

const styles = StyleSheet.create({
    buttonStyle: {
    borderRadius : 25,
    borderWidth: 2,
    borderColor: '#007aff',
    marginLeft : 20,
    marginRight : 20,
    padding : 30,
    },
    textStyle: {
    fontSize : 22,
    alignSelf:'center',
    color : '#007aff',
    fontWeight : '600',
    paddingTop : 10,
    paddingBottom : 10  
    },
    title: {
    fontSize : 50,
    alignSelf:'center',
    color : 'black',
    fontWeight : '600',
    },
    singleButton:{
    marginLeft : 20,
    marginRight : 20,
    padding : 30,
    margin : -70,
    }
});