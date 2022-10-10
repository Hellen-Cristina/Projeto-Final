import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StatusBar,ScrollView  } from 'react-native';


import styleLogin from '../stylesPG/LoginStyle'


export default function UserLogin ({navigation}) {
    
    const Filtro = () => {
        navigation.navigate('Filtro')
    } 

    return (
        <ScrollView>
        <KeyboardAvoidingView style={styleLogin.background}>
            <StatusBar style='auto'/>
            <View style={styleLogin.ContainerLogo}>

                <Image style={styleLogin.Logo}
                    source={require('../../assets/logoPrincipalG.png')}
                
                />

            </View>
            <View style={styleLogin.container}>

                <Text style={styleLogin.textInput}>
                    Login
                </Text>
                <TextInput style={styleLogin.input}

                    placeholder="Insira seu CPF"
                    autoCorrect={false}
                    onChangeText={()=> {}}
            
                />
                <Text style={styleLogin.textInput}>
                    Senha
                </Text>
                <TextInput style={styleLogin.input}

                    placeholder="Insira sua Senha"
                    autoCorrect={false}
                    onChangeText={()=> {}}

                 />
                
                
                <TouchableOpacity >

                    <Text style={styleLogin.link}>
                        Esqueceu a senha?
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={styleLogin.btAcessar}>

                    <Text style={styleLogin.botao} onPress={Filtro} >Acessar</Text>


                </TouchableOpacity>
                <TouchableOpacity >

                    <Text style={styleLogin.link}>Não tem conta? Cadastre-se</Text>
                    
                    
                </TouchableOpacity>
                    
                


        
            </View>          
        
        </KeyboardAvoidingView>
        </ScrollView>




    );
}



/* anotações */

/* falta 

    icones nos inputs
    redirecionamento de tela para links
    validadar botao de acesso
    trocar logo por svg
    validar campos e usuario e senha */