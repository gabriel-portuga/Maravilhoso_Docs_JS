import styled from 'styled-components/native'
import theme from './theme.json'

export const ContainerGeral = styled.SafeAreaView`
    flex:1;
    background-color: ${(props) => props.color ? theme.colors[props.color] : theme.colors.rosa};
`
export const ContainerWhite = styled.View`

`
export const ContainerLogoPrincipal = styled.View`
    flex:2;
    background-color: ${theme.colors.rosa};
    justify-content: center;
    align-items: center;
    padding-top: 15%;
    padding-left: 15%;
    padding-right: 15%;
`
export const BotaoPadrao = styled.TouchableOpacity`
    margin: 24px;
    background-color: ${theme.colors.rosa};
    border-radius: 16px;
    padding: 8px 0px 8px 0px;
    width: 40%;
    height: ${(props) => props.height || 'auto'};
    align-self: center;
    align-items: center;
`
export const BotaoPadraoTexto = styled.Text`
    font-size: 18px;
    color: white;
    font-weight: bold;
`
export const AvatarContainer = styled.TouchableOpacity`
    height: '';
    width: '';
    justify-content: '';
    align-items: '';
`
export const AvatarImage = styled.Image`
    height: '';
    width: '';
    resize: '';
`
export const Titulo = styled.Text`
    font-size: ${(props) => props.size || '36px'};
    font-weight: bold;
    margin: ${(props) => props.margin || '0px'};
    text-align: ${(props) => props.textAlign || 'auto'};
    color: ${(props) => props.color ? theme.colors[props.color] : theme.colors.preto};
    align-self: ${(props) => props.alignSelf || 'auto'};
    padding: ${(props) => props.padding || '0px'};
`

export const Subtitulo = styled.Text`
    padding-top: ${(props) => props.padding || '0px'};
    font-size: ${(props) => props.size || '16px'};
    text-align: center;
    color: ${(props) => props.color ? theme.colors[props.color] : theme.colors.cinza};
`
