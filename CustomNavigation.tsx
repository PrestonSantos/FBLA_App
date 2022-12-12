import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StyleSheet } from "react-native";
import LoginScreen from "./components/pages/LoginScreen";
import HomeScreen from "./components/pages/HomeScreen";
import { View } from "react-native";

import { Entypo } from '@expo/vector-icons';
import colors from "./config/colors";
import fonts from "./config/fonts";
import GroupsScreen from "./components/pages/GroupsScreen";
import EventsScreen from "./components/pages/EventsScreen";
import PhotosScreen from "./components/pages/PhotosScreen";

type EntypoIconName = React.ComponentProps<typeof Entypo>["name"];
const Tab = createBottomTabNavigator();

function TabBarBackground() {
    return(
        <View style = {{
            backgroundColor: 'red'
        }}>

        </View>
    )
}

const MainAppNavigator = () => {
    return (
        <Tab.Navigator screenOptions = {({route}) => ({
            headerShown: false,
            tabBarStyle: styles.TabBar,
            tabBarIcon: ({ focused, color, size}) => {
                let iconName: EntypoIconName = "home";

                if (route.name == "Home"){
                    iconName = focused ? "home": "home";
                } else if (route.name == "Events") {
                    iconName = focused ? "calendar": "calendar";
                } else if (route.name == "Groups") {
                    iconName = focused ? "graduation-cap": "graduation-cap";
                } else if (route.name == "Photos") {
                    iconName = focused ? "image-inverted": "image";
                }

                return <Entypo name = {iconName} size = {30} color = {color} />
            },
            tabBarActiveTintColor: 'rgba(0,0,0,0.85)',
            tabBarInactiveTintColor: 'rgba(0,0,0,0.45)',
            tabBarLabelStyle: {fontSize: 18, fontFamily: fonts.bold, alignSelf: 'center', justifyContent: 'center'}
        })}>
            <Tab.Screen 
                name = "Home"
                component = {HomeScreen}
            />
            <Tab.Screen 
                name = "Groups"
                component = {GroupsScreen}
            />
            <Tab.Screen 
                name = "Events"
                component = {EventsScreen}
            />
            <Tab.Screen 
                name = "Photos"
                component = {PhotosScreen}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    TabBar: {
        backgroundColor: 'white',
        elevation: 25,
        height: 65,
    },
})

export {MainAppNavigator};