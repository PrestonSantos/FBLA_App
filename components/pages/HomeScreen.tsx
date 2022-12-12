import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, ImageBackground, Pressable, ScrollView, Button, Modal } from 'react-native';
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
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [announcementsOpen, setAnnouncementsOpen] = useState(false);
  const [upcomingEventsOpen, setUpcomingEventsOpen] = useState(false);

  function backPress() {
    navigation.navigate("Login");
  }

  function reportAbsencePress(){
    console.log("yo");
  }

  function notificationsPress(toggle: boolean){
    setNotificationsOpen(toggle);
  }

  function announcementPress(toggle: boolean){
    setAnnouncementsOpen(toggle);
  }

  function upcomingEventsPress(toggle: boolean){
    setUpcomingEventsOpen(toggle);
  }

  return (
      <View style={styles.container}>

        {/* UPCOMING EVENTS MODAL:*/}
        <View style = {{position: 'absolute', alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%', height: '100%'}}>
          <Modal
          style = {{justifyContent: 'center', alignContent: 'center', flexDirection: 'column', flex: 1}}
          animationType="slide"
          transparent={true}
          visible={upcomingEventsOpen}
          onRequestClose={() => {
            setUpcomingEventsOpen(!upcomingEventsOpen);
          }}
          >
            <View style = {{backgroundColor: '#eeeeee', height: '100%', width: '100%', alignSelf: 'center'}}>
              <Text style = {{fontSize: 50, alignSelf: 'center'}}>Upcoming Events</Text>
              <View style = {{backgroundColor: "#081454", height: 430, width: '90%', alignSelf: 'center', borderRadius: 20, marginTop: 10}}>
                <Text style = {{width: '90%', height: 40, fontSize: 25, marginTop: 10, textAlign: 'center', alignSelf: 'center', color: "#f7c10f"}}>Events in the next 7 days:</Text>
                <Text style = {{width: '90%', height: 350, fontSize: 25, marginTop: 10, textAlign: 'center', alignSelf: 'center', color: "white"}}>{"December 14 - 40 Hours\n\nDecember 14 - Wrestling Match vs. Northern Lehigh\n\nDecember 17 - Wrestling Tournament: Beast of the East\n\nDecember 18 - Wrestling Tournament: Beast of the East"}</Text>
              </View>

              <BaseButton marginTop={20} onPress={() => upcomingEventsPress(false)} title = "Back" backgroundColor="#081454"></BaseButton>
            </View>
          </Modal>
        </View>
        
        {/* ANNOUNCEMENTS MODAL:*/}
        <View style = {{position: 'absolute', alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%', height: '100%'}}>
          <Modal
          style = {{justifyContent: 'center', alignContent: 'center', flexDirection: 'column', flex: 1}}
          animationType="slide"
          transparent={true}
          visible={announcementsOpen}
          onRequestClose={() => {
            setAnnouncementsOpen(!announcementsOpen);
          }}
          >
            <View style = {{backgroundColor: '#eeeeee', height: '100%', width: '100%', alignSelf: 'center'}}>
              <Text style = {{fontSize: 50, alignSelf: 'center'}}>Announcements</Text>
              <View style = {{backgroundColor: "#081454", height: 230, width: '90%', alignSelf: 'center', borderRadius: 20, marginTop: 10}}>
                <Text style = {{width: '90%', height: 40, fontSize: 25, marginTop: 10, textAlign: 'center', alignSelf: 'center', color: "#f7c10f"}}>New Announcement</Text>
                <Text style = {{width: '90%', height: 180, fontSize: 25, marginTop: 10, textAlign: 'center', alignSelf: 'center', color: "white"}}>You will receive credit towards your retreat graduation require if you are present during 40 Hours on Wednesday, December 14.</Text>
              </View>

              <BaseButton marginTop={20} onPress={() => announcementPress(false)} title = "Back" backgroundColor="#081454"></BaseButton>
            </View>
          </Modal>
        </View>

        {/* NOTIFICATIONS MODAL:*/}
        <View style = {{position: 'absolute', alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%', height: '100%'}}>
          <Modal
          style = {{justifyContent: 'center', alignContent: 'center', flexDirection: 'column', flex: 1}}
          animationType="slide"
          transparent={true}
          visible={notificationsOpen}
          onRequestClose={() => {
            setNotificationsOpen(!notificationsOpen);
          }}
          >
            <View style = {{backgroundColor: '#eeeeee', height: '100%', width: '100%', alignSelf: 'center'}}>
              <Text style = {{fontSize: 50, alignSelf: 'center'}}>Notifications</Text>
              <View style = {{backgroundColor: "#081454", height: 200, width: '90%', alignSelf: 'center', borderRadius: 20, marginTop: 10}}>
                <Text style = {{width: '90%', height: 40, fontSize: 25, marginTop: 10, textAlign: 'center', alignSelf: 'center', color: "#f7c10f"}}>New Post From FBLA Club</Text>
                <Text style = {{width: '90%', height: 140, fontSize: 25, marginTop: 10, textAlign: 'center', alignSelf: 'center', color: "white"}}>Testing and presentations must be submitted by Wednesday the 14th. See Dr. Gentile to schedule a time.</Text>
              </View>

              <BaseButton marginTop={20} onPress={() => notificationsPress(false)} title = "Back" backgroundColor="#081454"></BaseButton>
            </View>
          </Modal>
        </View>

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
              <Pressable onPress={() => announcementPress(true)}>
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
              <Pressable onPress={() => upcomingEventsPress(true)}>
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
              <Pressable onPress={() => notificationsPress(true)}>
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