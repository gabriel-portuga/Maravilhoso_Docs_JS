import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, TextInput } from "react-native-paper";
import { Context } from "../../context/authContext";
import * as Animatable from 'react-native-animatable'
import EmailInput from "../../components/EmailInput";

const SignIn = ({ navigation }) => {
    const { state, teste } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);

    return (
        <View style={{ backgroundColor: '#FF9E9D', flex: 1 }}>

            <SafeAreaView style={styles.container}>
                <Animatable.View animation="fadeInLeft" delay={500}>
                    <Text style={styles.bemvinde}>Bem-vinde</Text>
                </Animatable.View>

                <Text style={styles.login}>Login</Text>
                <EmailInput
                    value={email}
                    setValue={setEmail}
                />
                <TextInput
                    style={styles.textInput}
                    label="Senha"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
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
                />
                <Button mode="contained" style={styles.loginButton}
                    onPress={() => navigation.navigate('Principal')}
                >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
                        Login
                        </Text>
                </Button>
                
                <TouchableOpacity
                    onPress={() => navigation.navigate("SignUp")}
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
        </View>
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
    bemvinde: {
        color: 'black',
        fontSize: 36,
        fontWeight: "bold",
        alignSelf: 'center',
        paddingTop: 10,
    },
    login: {
        color: '#ff6766',
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 10,
        paddingLeft: 20,
        paddingTop: 10,
    },
    textInput: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
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