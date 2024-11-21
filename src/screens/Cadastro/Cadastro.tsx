import React from 'react';
import { View, Text, TextInput,StyleSheet, Image } from 'react-native';

import { styles } from './CadastroStyle';
import { BatHeader } from '../../components/BatHeader/BatHeader';
import { BatTextInput } from '../../components/BatTextInput/BatTextInput';


export function Cadastro() {
  return (
    <>
    
    
    
    <View style={styles.cadastroContainer}>
    <BatHeader/>
    <BatTextInput/>
    </View>
    
    </>
  );
}