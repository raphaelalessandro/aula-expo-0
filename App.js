import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo_0 from './componets/exemplo_1'
import Exemplo_2 from './componets/exemplo_2'


import Atividade_1 from './componets/atividade_1';
import Atividade_2 from './componets/atividade_2';

export default function App() {
  return (
    <View style={styles.componets}>
      <Atividade_2 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  componets: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    padding:18,
  },
});
