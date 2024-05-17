
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor:'green',
    borderRadius:20,
    width: '100%',
    alignItems: 'center',
},
titulo:{
  fontSize:30,
  fontWeight: 'bold',
  marginVertical:20,
  color:'blue',
},
botao:{
  borderWidth: 3,
  padding: 10,
  width: '80%',
  borderRadius: 20,
  alignItems:'center',
  borderColor: 'white',
},
txtBotao:  {
  fontSize:25,
  color:'white',
},
botaoPress: {
  backgroundColor:'white',
},
txtNumero: {
  fontSize: 30,
  color: 'yellow',
  marginVertical: 10,
},
} );

export default styles;