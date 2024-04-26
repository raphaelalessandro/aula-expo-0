import { View, Text } from 'react-native';

import styles from './styles';


export default function Mensagem({animais ='',extincao =''}) {
    return (
        <View style={styles.viewmensagem}>
            <Text style={styles.mensagem}>{` ${animais}${extincao}`}</Text>
        </View>
    );
}