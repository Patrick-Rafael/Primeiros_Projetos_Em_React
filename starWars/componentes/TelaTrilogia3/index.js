import React from "react";
import { Text, Image, View } from "react-native";

import styles from '../styles';
import leia from '../../assets/sith.jpg';



export default function TelaInicial() {

    return (

        <View style={styles.container}>
            <View style={styles.boxDescricao}>
                <Text style={styles.titulo}>
                    A historia de Rey

                </Text>

                <Image style={styles.imagem} source={leia} />

                <Text style={styles.textos} > Trilogia Sequela. Episódeos VII, VIII e IX  </Text>


                <Text style={styles.textos} > Enquato surge uma nova ameaça para a galaxia, Rey, uma catadora de sucata e Finn, um soldado imperial desertor, devem se juntar a Han Solo e Chewbacca para procurar a unica esperança de restaular a paz da galaxia.   </Text>

            </View>

        </View>

    );

} 
