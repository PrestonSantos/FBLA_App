import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import LoginScreen from  './components/pages/LoginScreen';
import HomeScreen from  './components/pages/HomeScreen';

import mainColors from './config/colors'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

export type RootStackParams = {
 Login: any;
 Home: any;
}

const RootStack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito': require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
    'Nunito-SemiBold': require('./assets/fonts/Nunito/Nunito-SemiBold.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito/Nunito-Bold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return(
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Login'>
        <RootStack.Screen name = "Login" component = {LoginScreen} options = {{headerStyle: styles.header}}/>
        <RootStack.Screen name = "Home" component = {HomeScreen} options = {{headerStyle: styles.header}}/>
      </RootStack.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: mainColors.lightMode.primary,

  }
})