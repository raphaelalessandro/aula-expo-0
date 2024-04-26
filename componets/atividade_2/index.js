import{ View,Text }from 'react-native'

import Mensagem from './mensagem'

import styles from './styles';


function Atividade_2(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Animais em extinção</Text>

            <Mensagem animais= 'Onça-pintada-'   extincao='em 140 mil quilômetros quadrados da Mata Atlântica, existem apenas 300 onças-pintadas.'/>
            <Mensagem animais= 'Mico-leão-dourado-'   extincao='Existem cerca de 3 200 indivíduos em liberdade'/>
            <Mensagem animais= ' Lobo-guará-'   extincao=' Estima-se que existam cerca de 23 mil animais na natureza, '/>
            <Mensagem animais= 'Panda-gigante-'   extincao='Existem cerca de 1.800 animais na natureza,'/>
   <Mensagem animais= 'Arara-azul-de-lear-'   extincao='cerca de 6 mil aves'/>
   <Mensagem animais= 'Pinguim-africano-'   extincao=' aproximadamente 14.700 casais de pinguins na África'/>
   <Mensagem animais= 'Peixe-boi-marinho-'   extincao=' aproximadamente 130.000 animais no mundo todo.'/>
   <Mensagem animais= 'Gorila-da-montanha-'   extincao=' Registros apontam que a população aumentou para pouco mais de 1000 indivíduos.'/>
        </View> 

    );
};
export default Atividade_2;