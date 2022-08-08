import createContext from "./createContext";
import api from "../api/index.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { ToastAndroid } from "react-native";

const initialState = {
  loginError: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loginError":
      return { ...state, loginError: action.payload}
    default:
      return state;
  }
};

const setLoginError = (dispatch) => {
  return (boolean) => {
    dispatch({type: "loginError", payload: boolean});
  };
};

const createUser = (dispatch) => {
  const navigation = useNavigation();
  return async (nome, email, senha) => {
    try {
      await api.post("/criar", {
        nome: nome,
        email: email,
        senha: senha,
      });
      navigation.navigate("SignIn");
      ToastAndroid.show('Cadastrado com sucesso!!', ToastAndroid.LONG)
    } catch (e) {
      dispatch({ type: "loginError", payload: true });
      console.log(e)
      ToastAndroid.show('Tente novamente!!', ToastAndroid.SHORT)
    }
  };
};

const loginUser = (dispatch) => {
  const navigation = useNavigation();

  return async (email, senha) => {
    try {
      const data = await api.post("/login", {
        email: email,
        senha: senha,
      });
      await AsyncStorage.setItem("token", data.data.token);
      navigation.navigate('Principal');
    } catch (e) {
      dispatch({ type: "loginError", payload: true });
      console.log(e)
    }
  };
};

export const { Context, Provider } = createContext(
  reducer,
  { setLoginError, createUser, loginUser },
  initialState,
);