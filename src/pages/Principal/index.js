import React from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AvatarContainer, AvatarImage, BotaoPadrao, BotaoPadraoTexto, ContainerGeral, ContainerPrimario, ContainerWhite, Titulo } from "../../styles";

const Principal = () => {
    const navigation = useNavigation();

    return (
        <ContainerGeral>

            <Titulo alignSelf='center' color='branco' margin='50px 5px 30px 5px' size='48px'>Maravilhoso_Docs</Titulo>

            <ContainerPrimario>

                <AvatarContainer onPress={() => navigation.navigate('Livros')}>
                    <AvatarImage source={require('../../../assets/icon_uerj.png')} />
                    <Titulo color='branco'>Livros</Titulo>
                </AvatarContainer>

                <AvatarContainer onPress={() => navigation.navigate('Artigos')}>
                    <AvatarImage source={require('../../../assets/artigos_default.png')} />
                    <Titulo style={{ color: 'white', fontSize: 32, fontWeight: 'bold', }}>Artigos</Titulo>
                </AvatarContainer>

            </ContainerPrimario>

            <ContainerWhite direction='row' marginTop='8%' height='100px' >

                <BotaoPadrao onPress={() => navigation.navigate('CadastrarHistoria')}>
                    <BotaoPadraoTexto> Cadastrar </BotaoPadraoTexto>
                </BotaoPadrao>

                <BotaoPadrao
                    onPress={async () => {
                        await AsyncStorage.removeItem("token");
                        navigation.navigate('SignIn')
                    }}
                >
                    <BotaoPadraoTexto> LogOut </BotaoPadraoTexto>
                </BotaoPadrao>

            </ContainerWhite>

        </ContainerGeral>
    )
}

export default Principal;