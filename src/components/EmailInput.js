import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const EmailInput = ({value, setValue}) => {
    return (
        <TextInput
          style={styles.textInput}
          label="E-mail"
          mode="flat"
          left={
            <TextInput.Icon
              name="at"
              size={25}
              color="#ff6766"
            />
          }
          value={value}
          onChangeText={(text) => setValue(text)}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    
      },
})
export default EmailInput