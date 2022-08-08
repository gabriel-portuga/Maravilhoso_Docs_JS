import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import Livros from "../Livros";

export default function CadastrarHistoria(){
    const navigation = useNavigation();
    console.log(Livros.Livros)
    return(
        <View>
            <Text> Cadastrar Aqui!</Text>
            
        </View>
    )
}