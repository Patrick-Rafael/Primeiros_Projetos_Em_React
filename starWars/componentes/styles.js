import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-between",
    padding: 20
  },
  boxDescricao: {
    alignItems: "center"
  },

  titulo: {
    color: '#f3e344',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '700',
    textAlign: "center"
  },
  textos: {
    color: '#f3e344',
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    marginHorizontal: 10
  },

  imagem: {
    width: 100,
    height: 100,
    marginBottom: 10
  },

  boxBotoes: {
    width: 200,
    flexDirection: 'row',
    justifyContent: "space-between"
  }
});

export default styles;