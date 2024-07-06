import React from 'react';
import { Image, Text } from 'react-native';
import BatmanLogo from '../../../assets/Batman-Logo.png' 

import { styles } from './BatLogoStyle';

export default function BatLogo() {
  return (
    <>
        <Text style={styles.titleText}>BAT PASS GENERATOR</Text>
        <Image source={BatmanLogo} style={styles.tinyLogo}/>
    </>
  );
}