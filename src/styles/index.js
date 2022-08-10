import styled from 'styled-components/native'
import theme from './theme.json'

export const ContainerGeral = styled.SafeAreaView`
    flex:1;
    background-color: ${(props) => props.color ? theme.colors[props.color] : theme.colors.rosa};
`



export const ContainerLogo = styled.View`
    flex:2;
    background-color: #FF9E9D;
    justify-content: center;
    align-items: center;
    padding-top: 15%;
    padding-left: 15%;
    padding-right: 15%;
`
export const ContainerWhite = styled.View`

`
export const BotaoPadrao = styled.Button`

`
export const Titulo = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin: 32px 0px 8px;
    text-align: center;
    color: '';
    align-self: '';
    padding-top: 0;
    padding-left: 0;
`

export const Subtitulo = styled.Text`

`
