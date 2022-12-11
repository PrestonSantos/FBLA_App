import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Animated } from 'react-native';

import colors from "../config/colors";
import fonts from "../config/fonts";

interface ButtonProps {
  title: string,
  height?: number,
  width?: number,
  fontSize?: number,
  backgroundColor?: string,
  textColor?: string,
  top?: number,
  bottom?: number,
  marginTop?: number,
  marginBottom?: number
  borderBottomLeftRadius?: number,
  borderBottomRightRadius?: number,
  borderTopLeftRadius?: number,
  borderTopRightRadius?: number,
  borderWidth?: number,
  rotate?: boolean,
  underline?: boolean,
  fontFamily?: string,
  onPress?: () => void,
}

export default function BaseButton(props: ButtonProps) {
  const state = {
    animatePress: new Animated.Value(1) 
  }

  function animate()
  {
    Animated.timing(state.animatePress, {
      toValue: 0.9,
      duration: 200,
      useNativeDriver: false
    }).start();
  }

  function animateOut(){
    Animated.timing(state.animatePress, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false
    }).start();
  }

  const { onPress,
    height = 40,
    width = 120,
    fontSize = 16,
    backgroundColor = colors.lightMode.primary,
    textColor = 'white',
    title = "Placeholder",
    top = 0,
    bottom = 0,
    marginBottom = 0,
    marginTop = 0,
    borderBottomLeftRadius = width/4,
    borderBottomRightRadius = width/4,
    borderTopLeftRadius = width/2,
    borderTopRightRadius = width/2,
    borderWidth = 0,
    rotate = false,
    underline = false,
    fontFamily = fonts.bold,
  } = props;

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      borderWidth: borderWidth,
      height: height,
      width: width,
      marginBottom: marginBottom,
      marginTop: marginTop,
      backgroundColor: backgroundColor,
      borderBottomLeftRadius: width/2,
      borderBottomRightRadius: width/2,
      borderTopLeftRadius: width/2,
      borderTopRightRadius: width/2,
      top: top,
      bottom: bottom,
      borderColor: colors.lightMode.primary,
      rotate: rotate,
      fontWeight: 'normal',
      
    },
    text: {
      fontSize: fontSize,
      letterSpacing: 0.25,
      color: textColor,
      justifyContent: 'center',
      alignSelf: 'center',
      textDecorationLine: underline ? 'underline': 'none',
      fontFamily: fontFamily,
      fontWeight: "normal",
    }
  });

  return (
    <Animated.View style = {{
      backgroundColor: 'transparent',
      transform: [
        {
          scale:state.animatePress
        }
      ]
    }}>
      <Pressable style = {styles.button} onPress = {onPress} onPressIn = {animate} onPressOut = {animateOut}> 
        <Text style = {styles.text}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
}

