import { StyleSheet } from 'react-native';


export const styleContenActions = StyleSheet.create({

    container:{
        flexDirection:'column',
        width: '90%',
        // marginTop: 20,
        // paddingTop: 10,
        paddingBottom: 10,
    },

    containerButtons_G_I: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    
    activeLine: {
        borderBottomWidth: 2,
        paddingBottom: 4,
        borderColor: 'white',
    },

    text: {
        fontSize: 20,
    },
    textG: {
        color: 'red',
        fontSize: 20,
    },
    textI: {
        color: 'green',
        fontSize: 20,
    }
})