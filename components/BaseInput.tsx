import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

import colors from "../config/colors";

interface InputProps {
  textVisible?: boolean,
  backgroundText: string,
  onChangeText?: (() => string) | undefined,
}

export default function BaseInput(props: InputProps) {
  const { onChangeText, textVisible = true, backgroundText = "Placeholder"} = props;
  return (
   <TextInput 
   style = {styles.input}
   placeholder = {backgroundText}
   placeholderTextColor = {colors.lightMode.primary}
   secureTextEntry = {!textVisible}
   onChangeText = {onChangeText}
   ></TextInput>
  );
}

const styles = StyleSheet.create({
    input: {
        height: 45,
        width: '110%',
        marginBottom: 20,
        borderWidth: 2.5,
        paddingLeft: 10,
        borderColor: colors.lightMode.primary,
        color: colors.lightMode.primary,
        alignSelf: 'center',
        borderRadius: 14,
        fontFamily: 'Nunito-SemiBold',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        fontSize: 18,
        fontWeight: "normal",
      },
});
