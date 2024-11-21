import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './BatHeaderStyle';
import batHeader from '../../../assets/bat-logo.png'

export function BatHeader() {
  return (
    <Image 
    style={styles.batHeadercontainer}
    source={batHeader}/>
  );
}