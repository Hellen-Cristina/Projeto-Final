import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StatusBar, ScrollView  } from 'react-native';
import Botao from '../../components/ButtonPadrao';

import styleEmail from '../stylesPG/EmailStyles'
export default class RecuperaSenha extends Component {
    
    render(){
        return(
            <ScrollView>
            <KeyboardAvoidingView style={styleEmail.background}>
                <StatusBar style='auto'/>
                <View style={styleEmail.ContainerLogo}>
                    
                    <Image style={styleEmail.Logo}
                        source={require('../../assets/logoPrincipalG.png')}

                    />
                </View>

                <View style={styleEmail.containerText}>
                    <Text style={styleEmail.textTitulo}>
                        Recuperação de Senha
                    </Text>
                    <Text style={styleEmail.text}>
                        Para sua segurança e de seus dados, {'\n'}
                        vamos confirmar as suas informacões.
                    </Text>
                </View>
                <View style={styleEmail.containerInput}>
                    <Text style={styleEmail.textInput}>
                        Email
                    </Text>
                    <TextInput style={styleEmail.input}
                        placeholder="Informe o email cadastrado"
                        onChangeText={()=>{}}
                    >
                        
                    </TextInput>
                    <TouchableOpacity>
                
                    <Text style={styleEmail.botao}>
                        Alterar
                    </Text>
        
            </TouchableOpacity>
                </View>
                



            </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

/* anotações */

/* falta 

    seta para voltar 
    logica para mandar o email e aparecer a mensagem 
    tentar usar components

*/