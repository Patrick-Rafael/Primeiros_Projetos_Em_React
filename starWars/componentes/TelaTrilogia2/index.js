import React from "react";
import { Text, View, Image } from "react-native";

import styles from '../styles';
import lucas from '../../assets/lucas-skywalker.jpg';


export default function TelaInicial() {

    return (
        <View style={styles.container}>

            <View style={styles.boxDescricao}>
                <Text style={styles.titulo}>A história de Luke SkyWalker</Text>

                <Image source={lucas} style={styles.imagem} />

                <Text style={styles.textos}>
                    Trilogia prequela. Episódios IV, V e VI
                </Text>


                <Text style={styles.textos}>
                    Essa foi a primeira trilogia a surgir, porém sua história se passa após a trilogia prequela.

                </Text>

                <Text style={styles.textos}>
                    Nela Luke SkyWalker se aventura pela galáxia para antender a um pedido da princesa Leia e se enconta em uma batalha com o grande vião Darth Vader           </Text>
            </View>
        </View>


    );

} 