import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StatusBar,ScrollView  } from 'react-native';


import styleAltCad from '../stylesPG/AltCadStyles'


export default class AlteraCad extends Component {
    render(){
    return (
        <ScrollView>
        <KeyboardAvoidingView style={styleAltCad.background}>
            <StatusBar style='auto'/>
            <View style={styleAltCad.ContainerLogo}>

                <Image style={styleAltCad.Logo}
                    source={require('../../assets/logoPrincipalG.png')}
                
                />

            </View>
            <View style={styleAltCad.container}>

                <Text style={styleAltCad.textInput}>
                    Nome Completo
                </Text>
                <TextInput style={styleAltCad.input}

                    placeholder="Digite seu nome"
                    autoCorrect={false}
                    onChangeText={()=> {}}
            
                />
                <Text style={styleAltCad.textInput}>
                    E-mail
                </Text>
                <TextInput style={styleAltCad.input}

                    placeholder="Digite seu E-mail"
                    autoCorrect={false}
                    onChangeText={()=> {}}

                 />

                <Text style={styleAltCad.textInput}>
                    Apelido
                </Text>
                <TextInput style={styleAltCad.input}

                    placeholder="Como você quer ser chamado"
                    autoCorrect={false}
                    onChangeText={()=> {}}

                 />
                

                <TouchableOpacity style={styleAltCad.btAcessar}>

                    <Text style={styleAltCad.botao}>Alterar</Text>

                </TouchableOpacity>    
                


        
            </View>          
        
        </KeyboardAvoidingView>
        </ScrollView>




    )};
}



/* anotações */

/* falta 

    icones nos inputs
    redirecionamento de tela para links
    validadar botao de acesso
    trocar logo por svg
    validar campos e usuario e senha */