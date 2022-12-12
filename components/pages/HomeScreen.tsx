import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, ImageBackground, Pressable, ScrollView, Button } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import mainColors from "../../config/colors";
import BaseButton from "../BaseButton"
import BaseInput from '../BaseInput';
import { RootStackParams } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import MaskedView from '@react-native-masked-view/masked-view';

import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as NavigationBar from 'expo-navigation-bar';
import fonts from '../../config/fonts';
import { MaterialIcons } from "@expo/vector-icons"
import { Ionicons } from '@expo/vector-icons'; 

const HomeScreen = ({route, navigation}: NativeStackScreenProps<any, "Home">) => {
  function backPress() {
    navigation.navigate("Login");
  }

  function reportAbsencePress(){
    console.log("yo");
  }

  function notificationsPress(){
    console.log('notifications');
  }

  function announcementPress(){
    console.log("yo announcement");
  }

  function upcomingEventsPress(){
    console.log("upcoming events");
  }

  return (
      <View style={styles.container}>
        <ScrollView style = {{width: "100%", flexDirection: 'column', backgroundColor: 'transparent'}}>
          
          {/* WELCOME DISPLAY: */}
          <View style = {{backgroundColor: 'transparent', flex: 1, width: 350, height: 150, marginTop: 30, justifyContent: 'flex-start', alignSelf: 'center', flexDirection: 'column'}}>
            <MaskedView
              maskElement={
                <View style = {{backgroundColor: "navy", height: '100%', width: '100%', flex: 1, borderRadius: 20, elevation: 10}}>

                </View>
              }
            >
              <View style = {{backgroundColor: "#081454", height: '100%', width: '100%'}}>
                <Text style = {{color: mainColors.primary, fontFamily: fonts.regular, fontStyle: 'normal', fontSize: 50, left: 15}}>Welcome,</Text>
                <Text style = {{color: "white", fontFamily: fonts.bold, fontSize: 50, left: 15}}>Preston</Text>
                <Image style = {styles.ndLogo1} source = {require('../../assets/notredamegreenpondlogo.png')}></Image>
              </View>
            </MaskedView>
          </View>

          {/* ANNOUNCEMENTS BUTTON: */}
          <View style = {{backgroundColor: 'transparent', flex: 1, width: 350, height: 150, marginTop: 30, justifyContent: 'flex-start', alignSelf: 'center', flexDirection: 'column'}}>
            <MaskedView
              maskElement={
                <View style = {{backgroundColor: "navy", height: '100%', width: '100%', flex: 1, borderRadius: 20, elevation: 10}}>

                </View>
              }
            >
              <Pressable onPress={announcementPress}>
                <View style = {{backgroundColor: "#f7c10f", height: '100%', width: '100%', borderWidth: 5, borderRadius: 20, flexDirection: 'column-reverse'}}>
                  <Text style = {{color: "#081454", fontFamily: fonts.bold, fontStyle: 'normal', fontSize: 40, alignSelf: 'flex-end', right: 15}}>Announcements</Text>
                  <MaterialIcons style = {[{flex: 1, zIndex: -1, alignSelf: 'center', justifyContent: 'center', position: 'absolute', bottom: 40}, { transform: [{rotate: "-10deg"}]}]}  size = {100} name = "announcement" color = {"rgba(8, 20, 84, 0.2)"}></MaterialIcons>
                </View>
              </Pressable>
            </MaskedView>
          </View>
          
          {/* UPCOMING EVENTS BUTTON: */}
          <View style = {{backgroundColor: 'transparent', flex: 1, width: 350, height: 150, marginTop: 30, justifyContent: 'flex-start', alignSelf: 'center', flexDirection: 'column'}}>
            <MaskedView
              maskElement={
                <View style = {{backgroundColor: "navy", height: '100%', width: '100%', flex: 1, borderRadius: 20, elevation: 10}}>

                </View>
              }
            >
              <Pressable onPress={upcomingEventsPress}>
                <View style = {{backgroundColor: "#081454", height: '100%', width: '100%', borderWidth: 5, borderRadius: 20}}>
                  <Text style = {{color: "#f7c10f", fontFamily: fonts.bold, fontStyle: 'normal', fontSize: 50, alignSelf: 'flex-start', left: 15}}>Upcoming</Text>
                  <Text style = {{color: "#f7c10f", fontFamily: fonts.bold, fontSize: 50, alignSelf: 'flex-start', left: 15}}>Events</Text>
                  <Ionicons style = {[{flex: 1, zIndex: -1, alignSelf: 'center', justifyContent: 'center', position: 'absolute', bottom: -10, right: 20}, { transform: [{rotate: "0deg"}]}]}  size = {150} name = "md-swap-vertical-sharp" color = {"rgba(247, 193, 15, 0.1)"}></Ionicons>
                </View>
              </Pressable>
            </MaskedView>
          </View>
          
          {/* NOTIFCATIONS BUTTON: */}
          <View style = {{backgroundColor: 'transparent', flex: 1, width: 350, height: 150, marginTop: 30, justifyContent: 'flex-start', alignSelf: 'center', flexDirection: 'column'}}>
            <MaskedView
              maskElement={
                <View style = {{backgroundColor: "navy", height: '100%', width: '100%', flex: 1, borderRadius: 20, elevation: 10}}>

                </View>
              }
            >
              <Pressable onPress={notificationsPress}>
                <View style = {{backgroundColor: "#f7c10f", height: '100%', width: '100%', borderWidth: 5, borderRadius: 20, flexDirection: 'column-reverse'}}>
                  <Text style = {{color: "#081454", fontFamily: fonts.bold, fontStyle: 'normal', fontSize: 50, alignSelf: 'flex-end', right: 15}}>Notifications</Text>
                  <MaterialIcons style = {[{flex: 1, zIndex: -1, alignSelf: 'center', justifyContent: 'center', position: 'absolute', bottom: 40}, { transform: [{rotate: "-30deg"}]}]}  size = {100} name = "notifications-active" color = {"rgba(8, 20, 84, 0.2)"}></MaterialIcons>
                </View>
              </Pressable>
            </MaskedView>
          </View>
          
          {/* REPORT ABSENCE BUTTON: */}
          <View style = {{backgroundColor: 'transparent', flex: 1, width: 350, height: 150, marginTop: 30, justifyContent: 'flex-start', alignSelf: 'center', flexDirection: 'column'}}>
            <MaskedView
              maskElement={
                <View style = {{backgroundColor: "navy", height: '100%', width: '100%', flex: 1, borderRadius: 20, elevation: 10}}>

                </View>
              }
            >
              <Pressable onPress={reportAbsencePress}>
                <View style = {{backgroundColor: "#081454", height: '100%', width: '100%', borderWidth: 5, borderRadius: 20}}>
                  <Text style = {{color: "#f7c10f", fontFamily: fonts.bold, fontStyle: 'normal', fontSize: 50, alignSelf: 'flex-end', right: 15}}>Report</Text>
                  <Text style = {{color: "#f7c10f", fontFamily: fonts.bold, fontSize: 50, alignSelf: 'flex-end', right: 15}}>Absence</Text>
                  <Image style = {styles.ndLogo2} source = {require('../../assets/notredamegreenpondlogo.png')}></Image>
                </View>
              </Pressable>
            </MaskedView>
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
  ndLogo1: {
    width: '140%',
    height: '150%',
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    opacity: 0.2,
    flex: 1,
    zIndex: -1,
    left: 10,
    position: 'absolute'
  },
  ndLogo2: {
    width: '140%',
    height: '150%',
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    opacity: 0.2,
    flex: 1,
    zIndex: -1,
    right: 10,
    position: 'absolute'
  },
});

export default HomeScreen;