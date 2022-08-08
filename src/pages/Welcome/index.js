import React, {useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ContainerGeral, ContainerLogo, Title, Texto, ButtonAcessar, ButtonText } from './styles'
import { StyleSheet } from "react-native";
import api from "../../api";

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

const Welcome = () => {

    let navegar = ""

    useEffect(() => {
        const singInToken = async () => {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                try {
                    navegar = 'Principal'
                    const data = await api.get("/", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    });
                } catch (e) {
                    navegar = 'SignIn'
                }
            } else {navegar = "SignIn"}
        }
        singInToken()
    }, [])

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
                onPress={() => navigation.navigate(navegar)}
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

export default Welcome