import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import { Context } from "../context/authContext";


const PasswordInput = ({ value, setValue, showPassword, setShowPassword }) => {
    const { state } = useContext(Context);
    return (
        <>
            <TextInput
                style={styles.textInput}
                label="Senha"
                value={value}
                onChangeText={(text) => setValue(text)}
                left={
                    <TextInput.Icon
                        name="lock"
                        size={25}
                        color="#ff6766"
                    />
                }
                secureTextEntry={showPassword}
                right={
                    showPassword ? (
                        <TextInput.Icon
                            name="eye"
                            size={25}
                            color="#ff6766"
                            onPress={() => setShowPassword(!showPassword)}
                        />
                    ) : (
                        <TextInput.Icon
                            name="eye-off"
                            size={25}
                            color="#ff6766"
                            onPress={() => setShowPassword(!showPassword)}
                        />
                    )
                }
                error={state.loginError}
            />
            {state.loginError ? (
                <HelperText type="error" visible={state.loginError}>
                    Password inválida
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

export default PasswordInput