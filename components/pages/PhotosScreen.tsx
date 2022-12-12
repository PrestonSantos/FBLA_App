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
import { Dimensions } from 'react-native';

import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as NavigationBar from 'expo-navigation-bar';
import fonts from '../../config/fonts';
import { ScrollView } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const { width, height } = Dimensions.get("window");

const PhotosScreen = ({route, navigation}: NativeStackScreenProps<any, "Photos">) => {
  function backPress() {
    navigation.navigate("Login");
  }

  return (
      <View style={styles.container}>
        <Ionicons style = {{position: 'absolute',bottom: 6, right: 10, zIndex: 100, justifyContent: 'flex-end'}} color = "rgba(0,0,0,0.4)" size = {80} name = "add-circle"></Ionicons>
        <Ionicons style = {{position: 'absolute',bottom: 6, right: 10, zIndex: 100, justifyContent: 'flex-end'}} color = "white" size = {80} name = "add-circle-outline"></Ionicons>
        <ScrollView snapToInterval={height - 80} decelerationRate = "fast" style = {{width: "100%", flexDirection: 'column', backgroundColor: 'blue', alignContent: 'center'}}>
          <View style = {{backgroundColor: 'transparent', flex: 1, width: '100%', height: (height - 80), marginTop: 0, justifyContent: 'flex-start', alignSelf: 'center', flexDirection: 'column'}}>
              <Entypo name = "share" size = {50} style = {{position: "absolute", zIndex: 100, bottom: 20, left: 10, color: 'white'}}/>
              <View style = {{borderRadius: 30, height: 60, width: 60,position: "absolute", zIndex: 90, bottom: 17, left: 7, backgroundColor: "rgba(0,0,0,0.3)"}}></View>
              <View style = {{backgroundColor: "#081454", height: '100%', width: '100%'}}>
                <Image style = {{right: 700,}} source = {require("../../assets/notredamephoto1.png")}></Image>
              </View>
            </View>
            <View style = {{backgroundColor: 'transparent', flex: 1, width: '100%', height: (height - 80), marginTop: 0, justifyContent: 'flex-start', alignSelf: 'center', flexDirection: 'column'}}>
            <Entypo name = "share" size = {50} style = {{position: "absolute", zIndex: 100, bottom: 20, left: 10, color: 'white'}}/>
            <View style = {{borderRadius: 30, height: 60, width: 60,position: "absolute", zIndex: 90, bottom: 17, left: 7, backgroundColor: "rgba(0,0,0,0.3)"}}></View>
              <View style = {{backgroundColor: "#081454", height: '100%', width: '100%'}}>
                <Image style = {{right: 700,}} source = {require("../../assets/notredamephoto2.png")}></Image>
              </View>
            </View>
            <View style = {{backgroundColor: 'transparent', flex: 1, width: '100%', height: (height - 80), marginTop: 0, justifyContent: 'flex-start', alignSelf: 'center', flexDirection: 'column'}}>
            <Entypo name = "share" size = {50} style = {{position: "absolute", zIndex: 100, bottom: 20, left: 10, color: 'white'}}/>
            <View style = {{borderRadius: 30, height: 60, width: 60,position: "absolute", zIndex: 90, bottom: 17, left: 7, backgroundColor: "rgba(0,0,0,0.3)"}}></View>
              <View style = {{backgroundColor: "#081454", height: '100%', width: '100%'}}>
                <Image style = {{right: 700,}} source = {require("../../assets/notredamephoto3.png")}></Image>
              </View>
            </View>
        </ScrollView>

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

export default PhotosScreen;