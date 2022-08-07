import React, { useState, useContext } from "react";
import { ContainerGeral, Menssage, Title, TextoInput, ButtonPrincipal, ButtonText, ButtonRegister, RegisterText, OlhoMagico, TextoInputSenha } from "./styles";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Context } from "../../context/authContext";
import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
    const navigation = useNavigation();
    const {state, teste} = useContext(Context);

    const [email, setEmail] = useState('');
    const [psw, setPsw] = useState('');
    const [hidePass, setHidePass] = useState(true);

    return (
        <ContainerGeral>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Menssage>Bem-vinde</Menssage>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Title>Email</Title>
                <TextoInput 
                    placeholder="Digite um email..."
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />

                
                <Title>Senha</Title>
                <View style={{flexDirection: 'row'}}>
                    <TextoInputSenha 
                        placeholder="Digite sua senha..."
                        value={psw}
                        onChangeText={(senha) => setPsw(senha)}
                        secureTextEntry={hidePass}
                    />
                    <OlhoMagico onPress={ () => setHidePass(!hidePass)}>
                        { hidePass ?
                            <Ionicons name="eye" color="black" size={25}/> :
                            <Ionicons name="eye-off" color="black" size={25}/>
                        }
                    </OlhoMagico>
                </View>
                <ButtonPrincipal
                onPress={() => navigation.navigate('Principal')}
                >
                    <ButtonText>Acessar</ButtonText>
                </ButtonPrincipal>
                        
                <ButtonPrincipal id='Teste'
                onPress={() => teste(psw)}
                >
                    <ButtonText>TesteLogin</ButtonText>
                </ButtonPrincipal>
                
                <ButtonRegister
                onPress={() => navigation.navigate('SignUp')}
                >
                    <RegisterText>Não possui uma conta? Cadastre-se</RegisterText>
                </ButtonRegister>

            </Animatable.View>
        </ContainerGeral>
    );
}

const styles = StyleSheet.create({
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    containerForm:{
        backgroundColor: '#fff',
        flex:1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingStart: '5%',
        paddingEnd: '5%'
    }
})