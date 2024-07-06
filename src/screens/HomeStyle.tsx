import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#333333',
      alignItems: 'center',
      justifyContent: 'center',
    },

    logoContainer:{
      flexDirection: 'column',
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 60,
      paddingTop: 20,
      paddingBottom: 10,
      backgroundColor: '#4D4D4D'
    },
    
    InputContainer:{
      width: '80%',
      flexDirection: 'column',
      alignItems: 'center',
    }
});

export default styles;