import { StyleSheet } from 'react-native';


export const AddContentActionsStyle = StyleSheet.create({

    container:{
        flexDirection:'column',
        width: '90%',
        marginTop: 20,
        // borderWidth: 1,
        // borderColor: 'red',
        paddingTop: '10',
        paddingBottom: '10',
    },

    containerButtons_G_I: {
        display: 'flex',
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