import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, ImageBackground, ScrollView } from 'react-native';
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

const GroupsScreen = ({route, navigation}: NativeStackScreenProps<any, "Groups">) => {
  function backPress() {
    navigation.navigate("Login");
  }

  return (
      <View style={styles.container}>

        <ScrollView style = {{width: "100%", flexDirection: 'column', backgroundColor: 'transparent', alignContent: 'center'}}>
          <View style = {{height: 500, alignSelf: 'center', width: '90%', flexDirection: 'column', marginTop: 10, borderRadius: 30, backgroundColor: "#081454"}}>
            <Text style = {{marginLeft: 10, textAlign: 'center', marginRight: 10, marginTop: 5, fontSize: 40, fontFamily: fonts.bold, alignSelf: 'center', color: "#f7c10f"}}>Future Business Leaders of America</Text>
            <Text style = {{fontSize: 20, marginTop: 10, marginLeft: 10, marginRight: 10, color: 'white', textAlign: 'left', alignSelf: 'center'}} >FBLA inspires and prepares students to become community-minded business leaders in a global society through relevant career preparation and leadership experiences.</Text>
            <Text style = {{marginLeft: 10, textAlign: 'center', marginRight: 10, marginTop: 5, fontSize: 30, fontFamily: fonts.bold, alignSelf: 'center', color: "#f7c10f"}}>Posts</Text>
            <Text style = {{fontSize: 20, marginTop: 10, marginLeft: 10, marginRight: 10, color: 'white', textAlign: 'left', alignSelf: 'center'}} >•Testing and presentations must be submitted by Wednesday the 14th. See Dr. Gentile to schedule a time.</Text>
          </View>
          <View style = {{height: 500, alignSelf: 'center', width: '90%', flexDirection: 'column', marginTop: 10, borderRadius: 30, backgroundColor: "#081454"}}>
            <Text style = {{marginLeft: 10, textAlign: 'center', marginRight: 10, marginTop: 5, fontSize: 40, fontFamily: fonts.bold, alignSelf: 'center', color: "#f7c10f"}}>Technology Club</Text>
            <Text style = {{fontSize: 20, marginTop: 10, marginLeft: 10, marginRight: 10, color: 'white', textAlign: 'left', alignSelf: 'center'}} >Tech Club is a STEM-focused group working to inspire students and provide new, engaging opportunities to the school.</Text>
            <Text style = {{marginLeft: 10, textAlign: 'center', marginRight: 10, marginTop: 5, fontSize: 30, fontFamily: fonts.bold, alignSelf: 'center', color: "#f7c10f"}}>Posts</Text>
            <Text style = {{fontSize: 20, marginTop: 10, marginLeft: 10, marginRight: 10, color: 'white', textAlign: 'left', alignSelf: 'center'}} >•Tech club will have its first meeting on Thursday, December 15.</Text>
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

export default GroupsScreen;