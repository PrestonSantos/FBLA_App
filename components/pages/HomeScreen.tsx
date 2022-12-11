import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import mainColors from "../../config/colors";
import BaseButton from "../BaseButton"
import BaseInput from '../BaseInput';
import { RootStackParams } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as NavigationBar from 'expo-navigation-bar';
import fonts from '../../config/fonts';

const HomeScreen = ({route, navigation}: NativeStackScreenProps<any, "Home">) => {
  function backPress() {
    navigation.navigate("Login");
  }

  return (
      <View style={styles.container}>

        <View style = {{backgroundColor: 'transparent', flex: 1, width: 300, top: 100, justifyContent: 'flex-start', alignSelf: 'center', flexDirection: 'column'}}>
          <BaseButton title = "Back" textColor = {mainColors.lightMode.primary} backgroundColor='transparent' width={300} marginTop = {30} underline = {true} fontFamily = {fonts.bold} onPress = {backPress}/>
        </View>

        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
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
    fontFamily: fonts.bold,
    color: mainColors.lightMode.primary,
    marginBottom: 5,
  },
  loginText: {
    fontSize: 80,
    fontWeight: "normal",
    fontFamily: fonts.bold,
    color: mainColors.lightMode.primary,
    marginBottom: 0,
    marginTop: 60,
    
  }
});

export default HomeScreen;