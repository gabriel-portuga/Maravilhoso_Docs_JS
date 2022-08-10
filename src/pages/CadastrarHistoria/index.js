import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { BotaoPadrao, BotaoPadraoTexto, ContainerGeral, ContainerWhite, Titulo } from "../../styles";
import theme from '../../styles/theme.json'

export default function CadastrarHistoria() {

    const schema = yup.object({
        titulo: yup.string().required("Informe um título!"),
        autor: yup.string().required("Informe um autor!"),
        link: yup.string().required("Informe um link!"),
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
            <ContainerWhite>
                <Titulo color='rosaEscuro' margin='0px 0px 10px 0px' padding='10px 0px 5px 20px'> Cadastrar</Titulo>

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
                    name="link"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.textoInput, { borderWidth: errors.ano && 1, borderColor: errors.ano && theme.colors.error }]}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Link da publicação"
                        />
                    )}
                />
                {errors.ano && <Text style={styles.labelError}>{errors.ano?.message}</Text>}
               
                <BotaoPadrao
                    onPress={handleSubmit(handleCadastrar)}>
                    <BotaoPadraoTexto>Cadastrar</BotaoPadraoTexto>
                </BotaoPadrao>

            </ContainerWhite>

        </ContainerGeral>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    tituloPrincipal: {
        color: '#ff6766',
        fontSize: 40,
        fontWeight: "bold",
        paddingTop: 10,
        alignSelf: 'center'
    },
    textoInput: {
        fontSize: 14,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    labelError: {
        alignSelf: 'flex-start',
        color: '#ff375b',
        marginBottom: 8,
        marginLeft: 10,
    },
})