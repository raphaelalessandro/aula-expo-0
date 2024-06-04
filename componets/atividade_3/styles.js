import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
    color: 'blue',
  },
  botao: {
    borderWidth: 3,
    padding: 10,
    width: '20%', // Adjusted width to fit all three buttons
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'white',
    marginHorizontal: 10, // Adjust horizontal margin for all buttons
  },
  txtBotao: {
    fontSize: 25,
    color: 'white',
  },
  botaoPress: {
    backgroundColor: 'white',
    // Add your missing properties here
  },
  txtNumero: {
    fontSize: 30,
    color: 'yellow',
    marginVertical: 10,
  },
  numeroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoZero: {
    // Add horizontal margin to center the button
    marginHorizontal: 5,
  },
});

export default styles;
