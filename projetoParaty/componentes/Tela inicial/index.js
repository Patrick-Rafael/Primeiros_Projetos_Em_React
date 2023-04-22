import React from 'react';
import { View, Button, Image, Text } from 'react-native';


import styles from './Style';
import ImagemPrincipal from '../../assets/telaInicial.png'
import { color } from 'react-native-reanimated';


export default function TelaInicial(props) {
    return (
        <View style={styles.containerPrincipal} >

            <View style={styles.containerSecundario}>
                <Text style={styles.titulo} > Paraty </Text>

                <Text style={styles.texto} > Saiba como visitar Paraty </Text>


                <Image source={ImagemPrincipal} style={styles.imagem} />

                <View style ={ styles.containerBotoes} >

                    <Button title='Ver Restaurantes' onPress={() => { props.navigation.navigate('Restaurantes') }} color="#372d00" />
                    <Button title='Ver Passeios' onPress={() => { props.navigation.navigate('Passeios') }} color="#372d00" />
                    <Button title='Ver Hospedagens' onPress={() => { props.navigation.navigate('Hospedagem') }} color="#372d00" />

                </View>


            </View>



        </View>



    )
}