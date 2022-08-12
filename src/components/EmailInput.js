import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import { Context } from "../context/authContext";

const EmailInput = ({ value, setValue }) => {
  const { state } = useContext(Context)
  return (
    <>
      <TextInput
        keyboardType="email-address"
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
        error={state.loginError}
      />
      {state.loginError ? (
        <HelperText type="error" visible={state.loginError}>
          
        </HelperText>
      ) : null}
    </>
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