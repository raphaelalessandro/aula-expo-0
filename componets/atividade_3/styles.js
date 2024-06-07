import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03c6fc',
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
        width: '40%',
        borderRadius: 20,
        alignItems: 'center',
        borderColor: 'blue',
        marginHorizontal:20,

    },
    txtBotao: {
        fontSize: 25,
        color: 'blue',
    },
    botaoPress: {
        backgroundColor: 'blue',
    },
    txtNumero: {
        fontSize: 60,
        color: 'blue',
        marginVertical: 10,
    },
    numeroconteiner :{

        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
});
export default styles;