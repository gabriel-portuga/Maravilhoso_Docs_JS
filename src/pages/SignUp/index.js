import React, { useState, useContext } from "react";
import { StyleSheet, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Text, Button, HelperText } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import EmailInput from "../../components/EmailInput";
import NomeInput from "../../components/NomeInputs";
import PasswordInput from "../../components/PasswordInput";

import { Context } from "../../context/authContext"

const SignUp = ({ navigation }) => {

  const { state, createUser, setLoginError } = useContext(Context)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true);

  return (
    <TouchableWithoutFeedback touchSoundDisabled onPress={() => Keyboard.dismiss()}>
      <View style={{ backgroundColor: '#FF9E9D', flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.createAccount}>Criar conta</Text>
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

          <Button
            style={styles.createButton}
            mode="contained"
            onPress={
              () => {
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
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Criar</Text>
          </Button>

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
            <Text>
              Já tem uma conta?{" "}
              <Text style={styles.loginText}>Faça o login</Text>
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "40%",
    alignSelf: "center",
    width: "80%",
    backgroundColor: 'white',
    borderRadius: 25
  },
  createAccount: {
    color: '#ff6766',
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft: 20,
    paddingTop: 10,
  },
  createButton: {
    padding: 5,
    margin: 20,
    width: "50%",
    alignSelf: "center",
    backgroundColor: "#FF9E9D",
  },
  loginText: {
    fontWeight: "bold",
    color: "#FF9E9D",
  },
});

export default SignUp;