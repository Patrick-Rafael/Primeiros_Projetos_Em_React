import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Jogos from './assets/img2.png';

export default function Conteudo() {
  return(
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Os principais jogos estão aqui</Text>
      <Image source={ Jogos } style={ estilos.img } />
      <Text style={ estilos.descricao }>A família Nintendo Switch é o lar de jogos exclusivos de séries como Super Smash Bros.™, The Legend of Zelda™, Mario Kart™ e muitas outras.</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  descricao: {
    textAlign: "center",
    marginBottom: 30,
  },
  img: {
    width: 200,
    height: 120,
    marginBottom: 10,
  }
});