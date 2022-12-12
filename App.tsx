import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { MainAppNavigator } from './CustomNavigation';

import mainColors from './config/colors'
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as NavigationBar from 'expo-navigation-bar';
import { useCallback } from 'react';
import { createStackNavigator, StackHeaderProps } from "@react-navigation/stack";
import LoginScreen from './components/pages/LoginScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';
import fonts from './config/fonts';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from "@expo/vector-icons"

import {
  useFonts,
  Nunito_500Medium,
  Nunito_700Bold,
  Nunito_600SemiBold
} from '@expo-google-fonts/nunito'
import colors from './config/colors';

export type RootStackParams = {
 Login: any;
}

export type TabStackParams = {
  Home: any;
}

const Stack = createStackNavigator();

let lastHeader = "";

function customHeader({navigation, route, options, back}: StackHeaderProps) : React.ReactNode {
  let headerTitle = getFocusedRouteNameFromRoute(route);
  
  if (headerTitle == "Groups" || headerTitle == "Photos" || headerTitle == "Home" || headerTitle == "Events" ){
    lastHeader = headerTitle;
  }

  return (
    <View style = {styles.header}>
      <View style = {{backgroundColor: 'transparent', width: '100%', position: 'absolute'}}>
        <Text style = {styles.titleStyle}>{lastHeader}</Text>
      </View>
      <View style = {{backgroundColor: 'transparent', width: '100%', position: 'absolute', flexDirection: 'row-reverse', alignContent: 'center'}}>
        <MaterialIcons style = {styles.settingsIcon} size = {35} name = {"settings"}/>

      </View>
    </View>
  )
}


export default function App() {
  // Load all custom fonts: 
  const [fontsLoaded] = useFonts({
    Nunito_500Medium,
    Nunito_700Bold,
    Nunito_600SemiBold
  })

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // Set navigation bar to be invisible:
  NavigationBar.setBehaviorAsync('inset-swipe');
  NavigationBar.setVisibilityAsync("hidden");

  // Setup app & pages:
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions = {({route}) => ({ 
        header: customHeader, 
        headerShown: true
      })}>
        <Stack.Screen name = "Login" component = {LoginScreen} options = {{headerShown: false}} />
        <Stack.Screen name = "Main App" component = {MainAppNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

// Header styles:
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: 65,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 10,
    
  },
  titleStyle: {
    color: 'black',
    fontSize: 28,
    fontFamily: fonts.bold,
    fontWeight: "normal",
    justifyContent: 'space-between',
    alignSelf: 'center',
    
  },
  bellIcon: {
    width: 35,
    height: 35,
    marginRight: 10,
    color: "rgba(0,0,0,0.45)",
    alignSelf: 'center',
    justifyContent: 'center'
  },
  settingsIcon: {
    width: 35,
    height: 35,
    marginRight: 15,
    color: "rgba(0,0,0,0.45)",
    alignSelf: 'center'
  }
})