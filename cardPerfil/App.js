import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import ImgP from './assets/paisagem.png';
import ImgEu from './assets/eu.jpeg'


export default function App() {
  return (
    <View style={estilos.container}>
 
   <Image
        source={ ImgP }
        style={ estilos.img }
      />

    <Image source={ImgEu} style={estilos.imgPerfil} />  

      <StatusBar style="auto" />


    <Text style={estilos.textNome}> Patrick Rafael </Text>

    
    <Text style={estilos.textDescricao}> Desenvolvedor <Text style={estilos.destaque}> Android </Text> nativo, java/kotlin, react, bacharel em sistemas de informação. </Text>

    </View>

  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 500,
    height: 300,
    
  },

  imgPerfil: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 10
  },

  textNome: {
    fontSize: 22,
    marginTop: 20
  
  },

  destaque: {
    fontWeight: 'bold',
    fontStyle: 'italic'
  },

  textDescricao:{

    marginHorizontal: 20,
      marginTop: 20, 
      fontSize: 16,
      textAlign: 'center'
    
  }

});
