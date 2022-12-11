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

function customHeader({navigation, route, options, back}: StackHeaderProps) : React.ReactNode {
  return (
    <View style = {styles.header}>
      <View style = {{backgroundColor: 'transparent', width: '100%', position: 'absolute'}}>
        <Text style = {styles.titleStyle}>Home</Text>
      </View>
      <View style = {{backgroundColor: 'transparent', width: '100%', position: 'absolute', flexDirection: 'row-reverse'}}>
      <Image style = {styles.settingsIcon} source = {require('./assets/settings.png')}/>
        <Image style = {styles.bellIcon} source = {require('./assets/bell.png')}/>
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
      <Stack.Navigator initialRouteName='Login' screenOptions={{ header: customHeader, headerShown: true}}>
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
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 20,
  },
  titleStyle: {
    color: colors.background,
    fontSize: 28,
    fontFamily: fonts.bold,
    fontWeight: "normal",
    justifyContent: 'space-between',
    alignSelf: 'center',
    
  },
  bellIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
    opacity: 0.35
  },
  settingsIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
    opacity: 0.35
  }
})