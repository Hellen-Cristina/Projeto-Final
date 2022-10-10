import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Filtro from "../login/FiltroVagas";
import UserLogin from "../login/Login";


const Stack = createNativeStackNavigator ();

export default function Stacks () {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = 'Login'>
                <Stack.Screen name = 'Login' component= {UserLogin}/>
                <Stack.Screen name = 'Filtro' component= {Filtro}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


