import { StyleSheet } from "react-native";

export const ShowContentStyle = StyleSheet.create({

    containerTransactions: {
        width:'95%',
        height: 330,
        // marginTop: 15,
        // borderWidth: 2,
        // borderColor: 'red',

        position: 'absolute',
        top: 520,
        left: 10,
    },

    containerTransaction: {
        flexDirection: 'row',
        width: '95%',
        padding: 12,
        marginVertical: 8,
        borderBottomWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
    },

    image: {
        width:60, 
        height:60,
        borderRadius: 8,
        marginRight: 12,
        objectFit: 'contain',
        objectPosition:'center'
    },

    textContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text : {
        color:'white', 
        fontSize: 16,
    },
    
    backgroundExpenseIcon: {
        backgroundColor: '#e74c3c',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    backgroundIncomeIcon: {
        backgroundColor: 'green',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

