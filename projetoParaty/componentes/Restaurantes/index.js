import React from 'react';
import { View, Button, Image, Text } from 'react-native';
import styles from './Style';

import Restautante1 from '../../assets/restaurante01.png'
import Restautante2 from '../../assets/restaurante02.png'
import Restautante3 from '../../assets/restaurante03.png'

export default function Restaurantes(props) {
    return (
        <View style={styles.containerPrincipal}>
            <Text style={styles.titulo} >Bares e Restaurantes</Text>

            <Text style={styles.texto} >  O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.
                Armazén Mar </Text>


            <View style={styles.containerSecundario} >
                <Image source={Restautante1} style={styles.image} />
                <Text style={styles.tituloCard} > Armazén Mar </Text>
                <Text> Localização: Rod Rio-Santos</Text>

            </View>

            <View style={styles.containerSecundario}>
                <Image source={Restautante1} style={styles.image} />
                <Text style={styles.tituloCard} > SEREIA DO MAR PIZZA-BAR </Text>
                <Text> Localização: Centro Histórico</Text>

            </View>

            <View style={styles.containerSecundario}>
                <Image source={Restautante1} style={styles.image} />
                <Text style={styles.tituloCard} > Bendita's Restaurante </Text>
                <Text> Localização: Praia do Jabaquara</Text>

            </View>

        </View>



    )
}