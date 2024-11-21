import React from 'react';
import { View, Text, TextInput,TouchableOpacity } from 'react-native';

import { styles } from './BatTextIpuntStyle';

export function BatTextInput() {
  return (
    <View style={styles.container}>
        <TextInput
        style={styles.input}
        keyboardType='default'
        placeholder='Texto'
        placeholderTextColor="#999"
        
      />
      <Text style={styles.textoLabel}>
        Nome
      </Text>
      <TextInput 
      style={styles.input}
      keyboardType='numeric'
      placeholder='Texto'
      />
      <Text>
        Telefone
      </Text>
      <TextInput
      style={styles.inputTextArea1}
      keyboardType='default'
      placeholder='Digite aqui . . .'
      />
      <Text
      style={styles.textoLabel}>
        Sobre o acidente
      </Text>
        <TextInput
      style={styles.inputTextArea2}
      keyboardType='default'
      placeholder='Digite aqui . . .'
      />
        <Text
      style={styles.textoExp}>
        Detalhe o agressor
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>



    </View>
  );
}