import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Capa from './assets/img1.png';

export default function Topo() {
  return(
    <View style={ estilos.containerTopo }>
      <Image source={ Capa } style={ estilos.topoImg } />
      <Text style={ estilos.topoTitulo }>Nintendo Switch</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  containerTopo: {
    backgroundColor:'#e60012',
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  topoTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  topoDescricao: {
    color: '#fff',
    textAlign: "center"
  },
  topoImg: {
    width: 100,
    height: 100
  }
});