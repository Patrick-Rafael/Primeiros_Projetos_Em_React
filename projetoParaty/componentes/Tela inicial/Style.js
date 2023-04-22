import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({


    containerPrincipal: {
        flex: 1,
        backgroundColor: '#e1e3e4',
        justifyContent: 'center',
        alignItems: 'center'




    },

    imagem: {
        width: 300,
        height: 200,
        marginBottom: 20


    },

    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10


    },

    containerSecundario: {
        backgroundColor: '#fff',
        padding: 10,
        width: 320,
        borderRadius: 10,
        borderColor: '#979797',
        borderWidth: 1,

    },

    texto: {
        textAlign: 'center',
        marginBottom: 20

    },

    containerBotoes: {
        height: 120,
        width: 300,
        justifyContent: "space-between"
    }









});

export default Styles;