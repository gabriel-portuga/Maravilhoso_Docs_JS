import React from "react";
import { TouchableOpacity, View, Image, Text, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Principal = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={{ backgroundColor: '#FF9E9D', height: '100%' }}>

            <Text style={{ alignSelf: 'center', color: 'white', fontSize: 40, fontWeight: 'bold', marginTop: 24, marginBottom: 24 }}>Maravilhoso_Docs</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Livros')}
                    style={{ height: 200, width: 200, alignItems: "center", justifyContent: 'space-around' }}
                >
                    <Image source={require('../../../assets/icon_uerj.png')}
                        style={{ height: '85%', width: '85%' }} />
                    <Text style={{ color: 'white', fontSize: 32, fontWeight: 'bold', }}>Livros</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Artigos')}
                    style={{ height: 200, width: 200, alignItems: "center", justifyContent: 'space-around' }}
                >
                    <Image source={require('../../../assets/artigos_default.png')}
                        style={{ height: '85%', width: '85%' }} />
                    <Text style={{ color: 'white', fontSize: 32, fontWeight: 'bold', }}>Artigos</Text>
                </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around', borderRadius: 15, margin: 16, height: 100, alignItems: 'center' }}>

                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('CadastrarHistoria')}
                    style={{ backgroundColor: '#FF9E9D', width: '40%', height: '40%', alignSelf: 'center', }}
                >
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                        Cadastrar
                    </Text>
                </Button>

                <Button
                    mode="contained"
                    style={{ backgroundColor: '#FF9E9D', width: '40%', height: '40%', alignSelf: 'center', }}
                    onPress={async () => {
                        await AsyncStorage.removeItem("token");
                        navigation.navigate('SignIn')
                    }}
                >
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                        LogOut
                    </Text>
                </Button>
            </View>

        </ScrollView>
    )
}

export default Principal;