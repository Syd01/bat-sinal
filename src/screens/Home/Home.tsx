import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from './Style';

import { Cadastro } from '../../screens/Cadastro/Cadastro';
import { BatLogo } from '../../components/BatLogo/BatLogo';

export function Home() {
  const [pass, setPass] = useState('');

  function AtivarBatSinal() {
    setPass('ola');
    console.log('Bat sinal ativado');
  }

  return (
    <>
      

      {pass === 'ola' ? (
        <>
        <View style={styles.cadastroContainer}>
          
         <Cadastro></Cadastro>
        </View>
        </>
      ) : (
        <>
        <View style={styles.logoContainer}>
        <BatLogo/>
        <Pressable onPress={AtivarBatSinal} style={styles.title}>
          <Text style={styles.textoButton}>Ativar Bat Sinal</Text>
        </Pressable>
        </View>
        </>
      )}
    </>
  );
}
