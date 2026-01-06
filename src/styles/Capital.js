import { StyleSheet } from 'react-native';


export const CapitalStyle = StyleSheet.create({

    containerModal:{
        // flex: 1,
        flexDirection:'column',
        justifyContent: 'flex-end',
        width: '95%',
        
    },

    modal: {
        // display: 'flex',
        flexDirection: 'column',
        width:'100%',
    },

    positionCircle: {
        width:'100%',  
        flexDirection:'row',
        justifyContent:'center', 
    },

    positionButtonAdd: {
        flexDirection:'row',
        justifyContent:'flex-end', 
        width:'100%', 
        paddingRight: 20,
        paddingBottom: 5,
    },

    containerG:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        borderRadius: 100,    
        borderWidth: 2,
        borderColor: 'red',
    },

    containerI:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'green',
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