import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ContainerGeral } from "../../styles";
import theme from '../../styles/theme.json'

export default function CadastrarHistoria() {

    const schema = yup.object({
        titulo: yup.string().required("Informe um título!"),
        autor: yup.string().required("Informe um autor!"),
        ano: yup.number().min(2, "Ano com 4 dígitos!").required("Digite um ano de publicaçao")
    })

    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    function handleCadastrar(data) {
        console.log(data);
    }
    return (
        <TouchableWithoutFeedback touchSoundDisabled onPress={() => Keyboard.dismiss()}>
        <ContainerGeral>
            <SafeAreaView style={styles.ContainerSecundario}>
                <Text style={styles.tituloPrincipal}> Cadastrar</Text>

                <Controller
                    control={control}
                    name="titulo"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.textoInput, { borderWidth: errors.titulo && 1, borderColor: errors.titulo && theme.colors.error }]}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Título do livro/Artigo..."
                        />
                    )}
                />
                {errors.titulo && <Text style={styles.labelError}>{errors.titulo?.message}</Text>}
                <Controller
                    control={control}
                    name="autor"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.textoInput, { borderWidth: errors.autor && 1, borderColor: errors.autor && theme.colors.error }]}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Nome do autor..."
                        />
                    )}
                />
                {errors.autor && <Text style={styles.labelError}>{errors.autor?.message}</Text>}
                <Controller
                    control={control}
                    name="ano"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            keyboardType="number-pad"
                            style={[styles.textoInput, { borderWidth: errors.ano && 1, borderColor: errors.ano && theme.colors.error }]}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Ano da publicação"
                        />
                    )}
                />
                {errors.ano && <Text style={styles.labelError}>{errors.ano?.message}</Text>}
               
                <TouchableOpacity
                    style={styles.botaoCadastrar}
                    onPress={handleSubmit(handleCadastrar)}>
                    <Text style={styles.textoBotao}>Cadastrar</Text>
                </TouchableOpacity>
                
            </SafeAreaView>

        </ContainerGeral>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    textoBotao: {
        fontSize: 16, fontWeight: 'bold', color: 'white', alignSelf: 'center'
    },
    tituloPrincipal: {
        color: '#ff6766',
        fontSize: 40,
        fontWeight: "bold",
        paddingTop: 10,
        alignSelf: 'center'
    },
    botaoCadastrar: {
        padding: 5,
        margin: 20,
        width: "50%",
        alignSelf: "center",
        backgroundColor: "#FF9E9D",
        borderRadius: 10
    },
    textoInput: {
        fontSize: 14,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    ContainerSecundario: {
        marginTop: "40%",
        alignSelf: "center",
        width: "80%",
        backgroundColor: 'white',
        borderRadius: 25
    },
    labelError: {
        alignSelf: 'flex-start',
        color: '#ff375b',
        marginBottom: 8,
        marginLeft: 10,
    },
})