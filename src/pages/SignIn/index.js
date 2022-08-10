import React, { useState, useContext } from "react";
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, HelperText } from "react-native-paper";
import { Context } from "../../context/authContext";
import * as Animatable from 'react-native-animatable'
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import { ContainerGeral, Titulo } from "../../styles";

const SignIn = ({ navigation }) => {
    const { state, loginUser, setLoginError } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);

    return (
        <TouchableWithoutFeedback touchSoundDisabled onPress={() => Keyboard.dismiss()}>
            <ContainerGeral>

                <SafeAreaView style={styles.container}>
                    <Animatable.View animation="fadeInLeft" delay={500}>
                        <Titulo alignSelf='center' padding='10px 0px 0px 0px'>Bem-vinde</Titulo>
                    </Animatable.View>

                    <Titulo color='rosaEscuro' margin='0px 0px 10px 0px' padding='10px 0px 0px 20px'>Login</Titulo>
                    <EmailInput
                        value={email}
                        setValue={setEmail}
                    />
                    <PasswordInput
                        value={password}
                        setValue={setPassword}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />
                    {state.loginError ? (
                        <HelperText
                            style={{ alignSelf: "center" }}
                            type="error"
                            visible={state.loginError}
                        >
                            Login inválido
                        </HelperText>
                    ) : null}
                    <Button
                        mode="contained" style={styles.loginButton}
                        onPress={() => {
                            if ((email || password) === "") {
                                setLoginError(true);
                                return;
                            }
                            loginUser(email, password);

                            setEmail("");
                            setPassword("");
                        }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
                            Login
                        </Text>
                    </Button>

                    <TouchableOpacity
                        onPress={() => {
                            setLoginError(false);
                            navigation.navigate("SignUp")
                        }}
                        style={{ alignSelf: "center", marginBottom: 10, }}
                    >
                        <Text>
                            Não tem uma conta?{" "}
                            <Text style={styles.createAccountText}>
                                Crie uma
                            </Text>
                        </Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ContainerGeral>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: "40%",
        alignSelf: "center",
        width: "80%",
        backgroundColor: 'white',
        borderRadius: 25
    },

    loginButton: {
        padding: 5,
        margin: 20,
        width: "50%",
        alignSelf: "center",
        backgroundColor: "#FF9E9D",
    },
    createAccountText: {
        fontWeight: "bold",
        color: "#FF9E9D",
    },
});

export default SignIn;