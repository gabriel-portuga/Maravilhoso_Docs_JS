import React, { useState, useContext } from "react";
import { TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { HelperText } from "react-native-paper";
import { Context } from "../../context/authContext";
import * as Animatable from 'react-native-animatable'
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import { BotaoPadrao, BotaoPadraoTexto, ContainerGeral, ContainerWhite, Subtitulo, Titulo } from "../../styles";

const SignIn = ({ navigation }) => {
    const { state, loginUser, setLoginError } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);

    return (
        <TouchableWithoutFeedback touchSoundDisabled onPress={() => Keyboard.dismiss()}>
            <ContainerGeral>
                <ContainerWhite >
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

                    <BotaoPadrao
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
                        <BotaoPadraoTexto> Login </BotaoPadraoTexto>
                    </BotaoPadrao>

                    <TouchableOpacity
                        onPress={() => {
                            setLoginError(false);
                            navigation.navigate("SignUp")
                        }}
                        style={{ alignSelf: "center", marginBottom: 10, }}
                    >
                        <Subtitulo color='preto'>
                            Não tem uma conta?{" "}
                            <Subtitulo color='rosaEscuro' fontWeight='bold'>
                                Crie uma
                            </Subtitulo>
                        </Subtitulo>
                    </TouchableOpacity>

                </ContainerWhite>
            </ContainerGeral>
        </TouchableWithoutFeedback>
    );
};

export default SignIn;