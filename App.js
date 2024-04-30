import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo_0 from './componets/exemplo_1';
import Exemplo_2 from './componets/exemplo_2';
import Exemplo_3 from './componets/exemplo_3';


import Atividade_1 from './componets/atividade_1';
import Atividade_2 from './componets/atividade_2';

export default function App() {
  return (
    <View style={styles.componets}>
      <Exemplo_3 />
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
