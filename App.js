import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo_0 from './componets/exemplo_1';

export default function App() {
  return (
    <View style={styles.componets}>
      <Exemplo_0 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  componets: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
