import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, ImageBackground, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react';

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

const EventsScreen = ({route, navigation}: NativeStackScreenProps<any, "Events">) => {
  const [data, setData] = useState({day: 12, event: "There are no events today."});

  function buttonClicked( dayParam: number, eventParam: string | undefined = "There are no events today."){
    setData({day: dayParam, event: eventParam})
  }

  return (
      <View style={styles.container}>
        {/*CALENDAR: */}
        <View style = {{width: "100%", height: "70%", backgroundColor: "#081454", flexDirection: 'column'}}>
          <Text style = {{fontSize: 30, fontFamily: fonts.bold, alignSelf: 'center', color: 'white', flex: 1}}>December {data.day}, 2022</Text>
          <View style = {{backgroundColor: 'transparent', height: "100%", width: '100%', flex: 9, flexDirection: 'column'}}>
            <View style = {{backgroundColor: "#081454", width: '100%', height: '16%', flexDirection: 'row'}}>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>Sun</Text>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>Mon</Text>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>Tue</Text>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>Wed</Text>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>Thu</Text>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>Fri</Text>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>Sat</Text>
              </View>
            </View>
            {/* ROW 1:*/}
            <View style = {{backgroundColor: 'transparent', width: '100%', height: '16%', flexDirection: 'row'}}>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.1)', marginLeft: 0, height: '100%'}}></View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%'}}></View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.1)', height: '100%', justifyContent: 'center'}}>
                <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}></Text>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}></Text>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.1)', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(1)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 1 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>1</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(2)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 2 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>2</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.1)', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(3)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 3 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>3</Text>
                </Pressable>
              </View>
            </View>
            {/* ROW 2:*/}
            <View style = {{backgroundColor: 'transparent', width: '100%', height: '16%', flexDirection: 'row'}}>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(4)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 4 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>4</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.1)', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(5)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 5 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>5</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(6)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 6 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>6</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.1)', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(7)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 7 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>7</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(8)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 8 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>8</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.1)', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(9)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 9 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>9</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(10)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 10 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>10</Text>
                </Pressable>
              </View>
            </View>
            {/* ROW 3:*/}
            <View style = {{backgroundColor: 'transparent', width: '100%', height: '16%', flexDirection: 'row'}}>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.1)', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(11)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 11 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>11</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(12)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 12 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>12</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.1)', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(13)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 13 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>13</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(14)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 14 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>14</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.1)', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(15)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 15 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>15</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(16)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 16 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>16</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.1)', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(17)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 17 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>17</Text>
                </Pressable>
              </View>
            </View>
            {/* ROW 4:*/}
            <View style = {{backgroundColor: 'transparent', width: '100%', height: '16%', flexDirection: 'row'}}>
            <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(18)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 18 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>18</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.1)', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(19)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 19 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>19</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(20)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 20 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>20</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.1)', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(21)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 21 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>21</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(22, "Half day / early dismissal")}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 22 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>22</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.1)', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(23, "Christmas break, no school")}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 23 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>23</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(24, "Christmas Eve, \nNo school")}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 24 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>24</Text>
                </Pressable>
              </View>
            </View>
            {/* ROW 5:*/}
            <View style = {{backgroundColor: 'transparent', width: '100%', height: '16%', flexDirection: 'row'}}>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.1)', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(25, "Christmas, \nNo school")}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 25 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>25</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(26)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 26 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>26</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.1)', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(27)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 27 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>27</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(28)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 28 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>28</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.1)', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(29)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 29 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>29</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'transparent', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(30)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 30 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>30</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.1)', height: '100%', justifyContent: 'center'}}>
                <Pressable style = {{height: '100%', width: '100%', position: 'absolute', justifyContent: 'center'}} onPress = {() => buttonClicked(31)}>
                  <View style = {{position: "absolute", width: 50, height: 50, backgroundColor: 'transparent', borderColor: data.day == 31 ? "yellow" : "transparent", borderWidth: 3, borderRadius: 150, alignSelf: 'center'}}></View>
                  <Text style = {{color: 'white', alignSelf: 'center', fontSize: 17, fontFamily: fonts.bold}}>31</Text>
                </Pressable>
              </View>
            </View>
          </View>

        </View>
        <View style = {{width: "100%", height: "70%", backgroundColor: "#f7c10f", flexDirection: 'column'}}>
          <Text style = {{fontSize: 40, alignSelf: 'center'}}>{data.event}</Text>
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
  
});

export default EventsScreen;