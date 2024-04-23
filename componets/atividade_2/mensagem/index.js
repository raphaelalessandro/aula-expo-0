import { View, Text } from 'react-native';

import styles from './styles';


export default function Mensagem({ingrediente,comida}) {
    return (
        <View style={styles.viewmensagem}>
            <Text style={styles.mensagem}>{` ${ingrediente}${comida}`}</Text>
        </View>
    );
}