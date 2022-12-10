import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, ImageBackground } from 'react-native';

import mainColors from "../../config/colors";
import BaseButton from "../BaseButton"
import BaseInput from '../BaseInput';
import { RootStackParams } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as NavigationBar from 'expo-navigation-bar';

const LoginScreen = ({route, navigation}: NativeStackScreenProps<any, "Login">) => {

  function loginPressed(): void {
    navigation.navigate("Main App", {screen: "Home"});
  }

  return (
      <View style={styles.container}>
        <View style = {styles.backgroundView}>
          <Image style = {styles.imageStyle} source = {require('../../assets/notredamegreenpondlogo.png')}></Image>
        </View>

        <Text style = {styles.loginText}>Login</Text>
        <Text style = {styles.smallText}>to your account</Text>

        <View style = {{backgroundColor: 'transparent', flex: 1, width: 300, top: 100, justifyContent: 'flex-start', alignSelf: 'center', flexDirection: 'column'}}>
          <BaseInput backgroundText = 'Username'/>
          <BaseInput backgroundText = "Password" textVisible = {false}/>
          <BaseButton title = "Forgot Password?" textColor = {mainColors.lightMode.primary} backgroundColor='transparent' width={300}/>
          <BaseButton title = "Login" textColor = {mainColors.lightMode.background} backgroundColor={mainColors.lightMode.primary} width={300} height = {60} marginTop = {20} fontSize = {20} onPress = {loginPressed}/>

          <View style = {{backgroundColor: 'transparent', height: 3, width: 270, alignSelf: 'center', alignContent: 'flex-start', justifyContent: 'center', flexDirection: 'row', marginTop: 20}}>
            <View style = {{backgroundColor: mainColors.lightMode.primary, height: 3, width: '35%', alignSelf: 'flex-start'}}></View>
            <Text style = {{color: mainColors.lightMode.primary, fontFamily: 'Nunito-Bold', fontSize: 17, alignSelf: 'center', justifyContent: 'flex-start', height: 28, marginLeft: 30, marginRight: 30}}>or</Text>
            <View style = {{backgroundColor: mainColors.lightMode.primary, height: 3, width: '35%', alignSelf: 'flex-start'}}></View>
          </View>
          <BaseButton title = "Create Account" textColor = {mainColors.lightMode.primary} backgroundColor={"transparent"} width={300} height = {60} fontSize = {20} borderWidth = {4} rotate = {true} marginTop = {20}/>
          {/*<BaseButton title = "Back" textColor = {mainColors.lightMode.primary} backgroundColor='transparent' width={300} marginTop = {30} underline = {true} fontFamily = {"Nunito"}/>*/}
        </View>

        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1B4F',
    alignItems: 'center',
    flexDirection: 'column',

    
  },
  backgroundView: {
    position: 'absolute',
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0,
    backgroundColor: 'transparent',
  },
  imageStyle: {
    width: '85%',
    height: '85%',
    resizeMode: 'contain',
    zIndex: -1,
    alignSelf: 'center',
    justifyContent: 'center',
    opacity: 0.2,
    flex: 1,

    
  },
  smallText: {
    fontSize: 20,
    fontWeight: "normal",
    fontFamily: 'Nunito-Bold',
    color: mainColors.lightMode.primary,
    marginBottom: 5,
  },
  loginText: {
    fontSize: 80,
    fontWeight: "normal",
    fontFamily: 'Nunito-Bold',
    color: mainColors.lightMode.primary,
    marginBottom: 0,
    marginTop: 60,
    
  }
});

export default LoginScreen;