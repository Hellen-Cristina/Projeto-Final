import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styleFiltro from '../stylesPG/FiltroStyles'

import { Dropdown } from './Drop';

export default function Filtro() {

  const [selectedLanguage, setSelectedLanguage] = useState();
  const DataBase = [
      {
        id:'',
        estado:'São Paulo'
      }
  ]



  return (
    <ScrollView>

      <View style={styleFiltro.container}>

      <Text style={styleFiltro.titulo}>Filtros</Text>

      <View style={styleFiltro.select}>
        <Text style={styleFiltro.texto}>Área de interesse</Text>
        
        
        <Picker style={styleFiltro.picker}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) =>
            setSelectedLanguage(itemValue)}
            DataBase={DataBase}
        
          >
          <Picker.Item label='Selecione' value={'Selecione'}/>
          <Picker.Item label='Técnologia' value={'tecnologia'} />
          <Picker.Item label='Administração' value={estado} />
        </Picker>


      </View>

      <View  style={styleFiltro.select}>
        <Text style={styleFiltro.texto}>Estado</Text>
        
        
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label='Selecione' value={'Selecione'} />
          <Picker.Item label='São Paulo' value={'SaoPaulo'} />
          <Picker.Item label='Minas' value={'Minas'} />
        </Picker>


      </View>
      <View  style={styleFiltro.select}>
        <Text style={styleFiltro.texto}>Cidade</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label='Selecione' value={'Selecione'}/>
          <Picker.Item label='Cotia' value={'Cotia'} />
          <Picker.Item label='Osasco' value={'Osasco'} />
        </Picker>
      </View>

      <View  style={styleFiltro.select}>
        <Text style={styleFiltro.texto}>Tipo de contratação</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label='Selecione' value={'Selecione'} />
          <Picker.Item label='CLT' value={'CLT'} />
          <Picker.Item label='Estagio' value={'Estagio'} />
        </Picker>
      </View>

     
      <View  style={styleFiltro.select}>
        <Text style={styleFiltro.texto}>Método de trabalho</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label='Selecione' value={'Selecione'}/>
          <Picker.Item label='Presencial' value={'Presencial'} />
          <Picker.Item label='Remoto' value={'Remoto'} />
          <Picker.Item label='Hibrido' value={'Hibrido'} />
        </Picker>
      </View>

      <Text style={styleFiltro.textoFiltro}>Exibir somente vagas recentes </Text>

      <TouchableOpacity style={styleFiltro.btAcessar}>

        <Text style={styleFiltro.botao}>Aplicar</Text>


      </TouchableOpacity>


      </View>


    </ScrollView>
  )
}