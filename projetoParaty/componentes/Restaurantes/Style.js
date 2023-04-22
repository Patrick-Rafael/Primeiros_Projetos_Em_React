import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({


    containerPrincipal: {
        backgroundColor: '#F6BA6F',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        

    },

    titulo:{ 

        fontSize: 20,
        fontWeight: 'bold', 
        marginBottom: 5
    

    },

    texto: {
        textAlign: 'center',
        marginBottom: 20,
       

    },

    image: {

        width: 300,
        height: 80,
        marginBottom: 10

    },

    containerSecundario: {
        marginBottom: 5    ,
        backgroundColor: '#fff',
        padding: 10,
        width: 320,
        borderRadius: 10,
        borderColor: '#979797',
        borderWidth: 1

    },

    tituloCard: {

        fontWeight: 'bold',
        marginBottom: 5


    }



});

export default Styles;