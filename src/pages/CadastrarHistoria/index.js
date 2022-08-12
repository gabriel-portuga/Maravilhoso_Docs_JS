import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { BotaoPadrao, BotaoPadraoTexto, ContainerGeral, ContainerWhite, InputCadastro, LabelError, Titulo } from "../../styles";
import theme from '../../styles/theme.json'

export default function CadastrarHistoria() {

    const schema = yup.object({
        titulo: yup.string().required("Informe um título!"),
        autor: yup.string().required("Informe um autor!"),
        link: yup.string().required("Informe um link!"),
    })

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
                            <InputCadastro
                                style={{ borderBottomWidth: errors.titulo && 1, borderColor: errors.titulo && theme.colors.error }}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Título do livro/Artigo..."
                            />
                        )}
                    />
                    {errors.titulo && <LabelError>{errors.titulo?.message}</LabelError>}
                    <Controller
                        control={control}
                        name="autor"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputCadastro
                                style={{ borderBottomWidth: errors.autor && 1, borderColor: errors.autor && theme.colors.error }}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Nome do autor..."
                            />
                        )}
                    />
                    {errors.autor && <LabelError>{errors.autor?.message}</LabelError>}
                    <Controller
                        control={control}
                        name="link"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputCadastro
                                style={{ borderBottomWidth: errors.link && 1, borderColor: errors.link && theme.colors.error }}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Link da publicação"
                            />
                        )}
                    />
                    {errors.link && <LabelError>{errors.link?.message}</LabelError>}

                    <BotaoPadrao
                        onPress={handleSubmit(handleCadastrar)}>
                        <BotaoPadraoTexto>Cadastrar</BotaoPadraoTexto>
                    </BotaoPadrao>

                </ContainerWhite>

            </ContainerGeral>
        </TouchableWithoutFeedback>
    )
}
