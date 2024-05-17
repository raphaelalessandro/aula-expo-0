import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

export default function Exemplo_3() {

    const [numero, setNumero] = useState(0);

    function incremento () {
        setNumero(numero + 1);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo_3</Text>
            <Pressable 
            onPress={() =>alert('brasil!!!')}
            style={({pressed}) => pressed ?
           [styles.botao, styles.botaoPress]
            :
            styles.botao}
            >
                <Text style={styles.txtBotao}>Ex. botão</Text>
            </Pressable>

            <Text style={styles.titulo}>exemplo state</Text>

            <Text style={styles.txtNumero}>{numero}</Text>

            <Pressable 
            onPress={() =>incremento()}
            style={({pressed}) => pressed ?
           [styles.botao, styles.botaoPress]
            :
            styles.botao}
            >
                <Text style={styles.txtBotao}>+1</Text>
            </Pressable>

        </View>
    );
};
