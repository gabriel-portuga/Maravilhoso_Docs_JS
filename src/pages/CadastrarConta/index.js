import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

export default function CadastrarConta(){
    const navigation = useNavigation();

    return(
        <View>
            <Text> Cadastrar Aqui! </Text>
        </View>
    )
}

/* Fazer um form de cadastro
- Validação dos inputs
- Ao clickar em SALVAR, apresentar um Toast ou Alert de "Salvo com sucesso"
*/

