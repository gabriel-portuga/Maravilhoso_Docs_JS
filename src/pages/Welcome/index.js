import React from "react";
import { ContainerGeral, ContainerLogo, Title, Texto, ButtonAcessar, ButtonText } from './styles'
import { StyleSheet } from "react-native";

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const navigation = useNavigation();
    
    return (
        <ContainerGeral>

            <ContainerLogo>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../../assets/logo_principal.png')}
                    style={{ width: '100%'}}
                    resizeMode="contain"
                />
            </ContainerLogo>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Title>Todos os contos em um único lugar!</Title>
                <Texto>Para começar essa aventura, aperte em acessar</Texto>
                
                <ButtonAcessar
                onPress={() => navigation.navigate('SignIn')}
                >
                    <ButtonText>Acessar</ButtonText>
                </ButtonAcessar>
            </Animatable.View>

        </ContainerGeral>
    );
}

const styles = StyleSheet.create({
   
    containerForm:{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingStart: '5%',
        paddingEnd: '5%'       
    }
})