import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

export default function CadastrarHistoria(){
    const navigation = useNavigation();

    return(
        <View>
            <Text> Cadastrar Aqui! </Text>
        </View>
    )
}