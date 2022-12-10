import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import LoginScreen from "./components/pages/LoginScreen";
import HomeScreen from "./components/pages/HomeScreen";


const Tab = createMaterialBottomTabNavigator();


const MainAppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name = "Home"
                component = {HomeScreen}
            />
        </Tab.Navigator>
    )
}

export {MainAppNavigator};