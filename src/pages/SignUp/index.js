import React, { useState, useContext } from "react";
import { TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { HelperText } from "react-native-paper";
import EmailInput from "../../components/EmailInput";
import NomeInput from "../../components/NomeInputs";
import PasswordInput from "../../components/PasswordInput";
import { Context } from "../../context/authContext"
import { BotaoPadrao, BotaoPadraoTexto, ContainerGeral, ContainerWhite, Subtitulo, Titulo } from "../../styles";

const SignUp = ({ navigation }) => {

  const { state, createUser, setLoginError } = useContext(Context)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true);

  return (
    <TouchableWithoutFeedback touchSoundDisabled onPress={() => Keyboard.dismiss()}>
      <ContainerGeral>
        <ContainerWhite>
          <Titulo color='rosaEscuro' margin='0px 0px 10px 0px' padding='10px 0px 0px 20px'>Criar conta</Titulo>

          <NomeInput
            value={name}
            setValue={setName}
          />
          <EmailInput
            value={email}
            setValue={setEmail}
          />
          <PasswordInput
            value={password}
            setValue={setPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          <BotaoPadrao
            onPress={() => {
              if ((name || email || password) === "") {
                setLoginError(true);
                return;
              }
              createUser(name, email, password)

              setName("");
              setEmail("");
              setPassword("");
            }}
          >
            <BotaoPadraoTexto> Criar </BotaoPadraoTexto>
          </BotaoPadrao>

          {state.loginError ? (
            <HelperText
              style={{ alignSelf: "center" }}
              type="error"
              visible={state.loginError}
            >
              Preencha os campos!
            </HelperText>
          ) : null}

          <TouchableOpacity
            onPress={() => {
              setLoginError(false);
              navigation.navigate("SignIn")
            }}
            style={{ alignSelf: "center", marginBottom: 10, }}
          >
            <Subtitulo color='preto'>Já tem uma conta?{" "}
              <Subtitulo color='rosaEscuro' fontWeight='bold'>Faça o login</Subtitulo>
            </Subtitulo>
          </TouchableOpacity>

        </ContainerWhite>
      </ContainerGeral>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;