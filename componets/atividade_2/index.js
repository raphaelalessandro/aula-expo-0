import{ View,Text }from 'react-native'

import Mensagem from './mensagem'

import styles from './styles';


function Atividade_2(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>

            <Mensagem ingrediente= 'feijada-'   comida='todas as carnes salgadas (costela,/ linguiças variadas,/ carne seca,/ pé, orelha, /rabo, /lombo, /bacon) e é servira com rodelas de laranja, /couve refogada no alho, /arroz e farofa.'/>
            <Mensagem ingrediente= 'yakisoba-'   comida='2 pacotes de Macarrão Instantâneo Todeschini Galinha Caipira/
2 xícaras e 1/2 (chá) de água Fios de óleo1 /folha de acelga picada /1 cenoura em rodelas /1 cebola em cubos/ 1 xícara (chá) de brócolis/ 1 xícara (chá) de carne bovina em tiras 1 xícara (chá) de peito de frango em cubos 1/2 pimentão vermelho em cubos 2 xícaras (chá) de shoyu 1/2 xícara (chá) de água 2 colheres (chá) de óleo de gergelim torrado 2 colheres (chá) de amido de milho'/>
            <Mensagem ingrediente= 'lasanha-'   comida=' 1 colher (sopa) azeite meio quilo de massa para lasanha Molho Bolonhesa 2 colheres (sopa) de óleo meio quilo de carne moída 1 cenoura pequena ralada 1 colher (sopa) de salsão picado 1 tablete de MAGGI® Caldo Carne
1 lata de purê de tomate 1 xícara (chá) de água Molho Branco 2 colheres (sopa) de manteiga 1 e meia colher (sopa) de farinha de trigo meio litro de Leite Líquido NINHIO® Forti+ Integral meia colher (chá) de sal 1 pitada de pimenta-do-reino 1 pitada de noz-moscada 1 caixinha de NESTLÉ® Creme de Leite'/>
            <Mensagem ingrediente= 'guacamole-'   comida='1 colher (sopa) de óleo
1 cebola pequena picada 1 dente de alho picado 300 g de peito de frango em cubos 1 stick de MAGGI® MEU SEGREDO® 7 Vegetais 1 pitada de pimenta 2 colheres (sopa) de ketchup 2 colheres (sopa) de mostarda 1 caixinha de NESTLÉ® Creme de Leite'/>
   <Mensagem ingrediente= 'strogonoff-'   comida='1 abacate picado 1 cebola roxa picada 2 tomates sem sementes picados 1 stick de MAGGI® MEU SEGREDO® 7 Vegetais 2 colheres (sopa) de azeite suco de 1 limão meia pimenta dedo-de-moça, sem sementes, picada 2 colheres (sopa) de coentro picado 1 pacote de nachos (150 g)'/>
   <Mensagem ingrediente= 'batatonese-'   comida='4 batatas azeite 3 colheres de sopa de azeite de oliva vinagre 3 colheres de sopa de vinagre maionese 4 colheres de sopa de maionese Água para cozinhar as batatas sal Sal a gosto'/>
        </View> 
    );
};
export default Atividade_2;