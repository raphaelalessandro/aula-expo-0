import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

export default function Atividade_3() {

    const [numero, setNumero] = useState(0);

    function maisum() {
        setNumero(numero + 1);
    }
    function menosum() {
        setNumero(numero - 1);
    }
    function zerar() {
        setNumero(numero - numero);
    }


    return (
        <View style={styles.container}>

<br></br>
<br></br>
<br></br> 

<View style={styles.numeroconteiner}>
            <Pressable
                onPress={() => menosum()}
                style={({ pressed }) => pressed ?
                    [styles.botao, styles.botaoPress]
                    :
                    styles.botao}
            >
                <Text style={styles.txtBotao}>-1</Text>
            </Pressable> 

            <Text style={styles.txtNumero}>{numero}</Text>

<br></br> 

            <Pressable
                onPress={() => maisum()}
                style={({ pressed }) => pressed ?
                    [styles.botao, styles.botaoPress]
                    :
                    styles.botao}
            >
                <Text style={styles.txtBotao}>+1</Text>
            </Pressable>

<br></br>
</View>

           

<br></br>
            
            <Pressable
                onPress={() => zerar()}
                style={({ pressed }) => pressed ?
                    [styles.botao, styles.botaoPress]
                    :
                    styles.botao}
            >
                <Text style={styles.txtBotao}>Zerar</Text>
            </Pressable>
        </View>
    );
}