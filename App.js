import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo_0 from './componets/exemplo_1';
import Exemplo_2 from './componets/exemplo_2';
import Exemplo_3 from './componets/exemplo_3';
import Exemplo_3 from './componets/exemplo_4';


import Atividade_1 from './componets/atividade_1';
import Atividade_2 from './componets/atividade_2';
import Atividade_3 from './componets/atividade_3';
import Exemplo_4 from './componets/exemplo_4';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo_4 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
});

