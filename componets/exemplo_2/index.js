import {View, Text} from 'react-native';

import styles from './styles';

function Exemplo2 () {
    return(
        <View style={styles.container}>
            <text style={styles.titulo}>Exemplo2</text>

            <View style={styles.viewmensagem}>
            <Text style={styles.mensagem}>Ola Raphael</Text>
        </View>
        </View>
        
    )
} 

export default Exemplo2;