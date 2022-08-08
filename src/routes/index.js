import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from "react-native-safe-area-context";

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import Principal from '../pages/Principal';
import SignUp from '../pages/SignUp';
import Livros from '../pages/Livros';
import Artigos from '../pages/Artigos';
import CadastrarHistoria from '../pages/CadastrarHistoria';
import { Provider } from '../../src/context/authContext';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Principal"
                component={Principal}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name="Livros"
                component={Livros}
                options={{ headerShown: false }}
            />
           
            <Stack.Screen
                name="Artigos"
                component={Artigos}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name="CadastrarHistoria"
                component={CadastrarHistoria}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default () => {
    return (
        <Provider>
            <SafeAreaProvider>
                <Routes/>
            </SafeAreaProvider>
        </Provider>
    )
}
