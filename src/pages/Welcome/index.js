import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BotaoPadrao, BotaoPadraoTexto, ContainerGeral, ContainerLogoPrincipal, Subtitulo, Titulo, } from "../../styles";
import { StyleSheet } from "react-native";
import api from "../../api";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';

const Welcome = () => {

    let navegar = ""
    const navigation = useNavigation();

    useEffect(() => {
        const singInToken = async () => {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                try {
                    const data = await api.get("/", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    });
                    navegar = 'Principal'
                } catch (e) {
                    navegar = 'SignIn'
                }
            } else { navegar = "SignIn" }
        }
        singInToken()
    }, [])

    return (
        <ContainerGeral>

            <ContainerLogoPrincipal>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../../assets/logo_principal.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </ContainerLogoPrincipal>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Titulo size='24px' margin='32px 0px 0px 0px' textAlign='center'>Todos os contos em um único lugar!</Titulo>

                <BotaoPadrao onPress={() => navigation.navigate(navegar)} >
                    <BotaoPadraoTexto>Acessar</BotaoPadraoTexto>
                </BotaoPadrao>

                <Subtitulo>Para começar essa aventura, aperte em acessar</Subtitulo>
            </Animatable.View>

        </ContainerGeral>
    );
}

const styles = StyleSheet.create({

    containerForm: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingStart: '5%',
        paddingEnd: '5%'
    }
})

export default Welcome