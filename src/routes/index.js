import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Principal from '../pages/Principal';
import CadastrarConta from '../pages/CadastrarConta';

const Stack = createNativeStackNavigator();

export default function Routes() {
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
                name="CadastrarConta"
                component={CadastrarConta}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Principal"
                component={Principal}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}