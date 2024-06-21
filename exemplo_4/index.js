import { useState } from 'react';
import {View, Text, TextInput} from 'react-native';

export default function Exemplo_4 () {
    return(
        <View style={styles.container}>
            <Text style={style.titulo}>Exemplo_4</Text>
            <TextInput
             placeholder='Digite seu nome...'
             style={styles.input}
             />
            <Text style={styles.texto}>Nome digitado:</Text>
        </View>
    );
}
