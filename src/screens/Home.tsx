import React from 'react';
import { StatusBar } from 'expo-status-bar';
import BatButton from '../components/Button/BatButton';
import BatLogo from '../components/Logo/BatLogo';
import {View, Text} from 'react-native';
import styles from './HomeStyle';

function Home() {
  return (
    <View style={styles.appContainer}>

        <View style={styles.logoContainer}>
          <BatLogo />
        </View>

        <View style={styles.InputContainer}>
          <BatButton />
        </View>

        <StatusBar style="light" />
    </View>
  )
}
export default Home