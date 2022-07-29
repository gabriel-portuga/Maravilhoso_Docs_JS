import React from "react";
import { View, Text, Image } from "react-native";

export default function Principal() {
    return (
        <View>
            <Text style={{alignSelf: 'center', fontSize: 28}}>Pagina Principal</Text>

            <View style={{height:'50%'}}>
                <Text>História 01</Text>
                <Image
                        source={require('../../../assets/icon_princess.png')}
                        style={{width: '20%', height: '20%', resizeMode: 'stretch'}}
                    />
            </View>

            <View style={{height:'50%'}}>
                <Text>História 02</Text>
                <Image
                        source={require('../../../assets/icon_princess.png')}
                        style={{width: '20%', height: '20%', resizeMode: 'stretch'}}
                    />
            </View>
        </View>
    );
}

/*
Obrigatório
- Ter um button para direcionar ao cadastrar novo item
- Criar uma *listagem* clicavel que abra uma *sublistagem*
*/