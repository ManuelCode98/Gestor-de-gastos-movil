import { StyleSheet } from "react-native";


export const IconsTransactionGStyle = StyleSheet.create({
  
    containerIcons: {
        flexDirection:'column',
        flexWrap:'wrap',
        gap: 5,
        width: '90%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 30,
        paddingTop: 10,
    },

    containerIcon: {
        width: '33%',
        alignItems: 'center',
        paddingTop:10,
    },

    backgroundIcon: {
        backgroundColor: '#e74c3c',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    backgroundIconSelect: {
        backgroundColor: '#e74c3c',
        width: 60,
        height: 60,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 15,
        color: 'white',
    }

});


