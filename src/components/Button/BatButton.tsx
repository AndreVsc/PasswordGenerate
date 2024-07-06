import React,{useState} from 'react';
import { Text,Pressable } from 'react-native';
import { setStringAsync } from 'expo-clipboard';
import generatePass from '../../services/passwordService';
import BatTextInput from '../TextInput/BatTextInput';
import { styles } from './BatButtonStyle';


export default function BatButton() {

    const [pass,setPass] = useState('');

    const handleGenerateButton = ():void => {
        let generateToken = generatePass;
        setPass(generateToken)
    }

    const handleCopyButton = () =>{
        setStringAsync(pass)
        alert('Sua senha já foi copiada!')
    }

    return ( 
        <>
            <BatTextInput pass={pass}/>
            <Pressable style={styles.button} onPress={handleGenerateButton}>
                <Text style={styles.textButton}>GENERATE</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleCopyButton}>
                <Text style={styles.textButton}>COPY</Text>
            </Pressable>
        </>
    );
}