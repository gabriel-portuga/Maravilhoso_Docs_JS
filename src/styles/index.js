import styled from 'styled-components/native'
import theme from './theme.json'

export const ContainerGeral = styled.SafeAreaView`
    flex:1;
    background-color: ${(props) => props.color ? theme.colors[props.color] : theme.colors.rosa};
`
export const ContainerWhite = styled.View`
    background-color: ${theme.colors.branco};
    width: 80%;
    height: ${(props) => props.height || 'auto'};
    border-radius: 24px;
    align-self: center;
    margin-top: ${(props) => props.marginTop || '40%'};
    flex-direction: ${(props) => props.direction || 'column'};
    justify-content: space-around;
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
export const ContainerItensList = styled.View`
    flex:1;
    flex-direction: row;
    align-items: center;
    padding: 8px 12px 0px 10px;
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
export const ContainerPrimario = styled.View`
    flex-direction: row;
    justify-content: space-around;
`
export const AvatarContainer = styled.TouchableOpacity`
    height: ${(props) => props.height || '200px'};
    width: ${(props) => props.width || '200px'};
    justify-content: ${(props) => props.justifyContent || 'space-around'};
    align-items: center;
`
export const AvatarImage = styled.Image`
    height: 85%;
    width: 85%;
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
    font-weight: ${(props) => props.fontWeight || 'normal'};
    padding-top: ${(props) => props.padding || '0px'};
    font-size: ${(props) => props.size || '16px'};
    text-align: center;
    color: ${(props) => props.color ? theme.colors[props.color] : theme.colors.cinza};
`
export const LabelError = styled.Text`
    align-self: flex-start;
    color: ${theme.colors.error};
    margin-bottom: 8px;
    margin-left: 10px;
`
export const InputCadastro = styled.TextInput`
    font-size: 14px;
    margin: 0px 10px 10px 10px;
`
