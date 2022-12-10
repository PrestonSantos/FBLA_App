import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { MainAppNavigator } from './CustomNavigation';

import mainColors from './config/colors'
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as NavigationBar from 'expo-navigation-bar';
import { useCallback } from 'react';
import { createStackNavigator, StackHeaderProps } from "@react-navigation/stack";
import LoginScreen from './components/pages/LoginScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';



export type RootStackParams = {
 Login: any;
}

export type TabStackParams = {
  Home: any;
}

const Stack = createStackNavigator();

function customHeader({navigation, route, options, back}: StackHeaderProps) : React.ReactNode {
  return (
    <View></View>
  )
}


export default function App() {
  // Load all custom fonts: 
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
    backgroundColor: 'transparent',
    color: 'mainColors.lightMode.primary',
  },
  headerTitle: {
    color: mainColors.lightMode.primary,
  },
})