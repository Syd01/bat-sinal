import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyle';
import batlogo from '../../../assets/bat-logo.png'

export function BatLogo() {
  return (
    <>
<Image
source={batlogo}
style={styles.BatLogo}
>
</Image>

    </>
  );
}