
export const styleCalendarComp = {

    themeCalendar: {
        calendarBackground: 'transparente',
        dayTextColor: 'red',
        textDisabledColor: '#444',
        monthTextColor:'white',
        arrowColor: 'red',
    },

    container: {
        flexDirection: 'column',
        width: '100%',
        // borderWidth: 1,
        // borderColor: 'yellow',
        zIndex:1,
        backgroundColor:'black',
        marginTop:15,

    },

    text : {
        color: 'white' ,
    },
    
    textR : {
        color: 'red' ,
    },

    textDate:{
         display: 'flex',
        flexDirection: 'row',
        // borderBottomWidth: 1,
        // borderColor: 'red',
        textAlign: 'center',
        padding: 10,
    },

    selectDate: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 15,
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    showDate: {
        // borderWidth: 1,
        // borderColor: 'yellow', 
    },


    monthGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: '56%',
        
    },

    monthItem: {
        width: '30%',
        padding: 12,
        marginVertical: 8,
        textAlign: 'center',
        borderRadius: 8,
        backgroundColor: 'transparent',
        color: 'red',
    },

    selectMonthAndYear: {
        backgroundColor: 'white', 
        color: 'black'
    },

    yearGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: '56%',
        
    },

    yearItem: {
        width: '30%',
        padding: 12,
        marginVertical: 8,
        textAlign: 'center',
        borderRadius: 8,
        backgroundColor: 'transparent',
        fontSize: 16,
        color: 'red',
    },
}