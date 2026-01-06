import { View, Text } from 'react-native';
import { styleContenActions } from '../../styles/ContentActions';
import CalendarComp from './CalendarComp';
import { useButtonsTransaction } from '../../store/StateGlobal';


const {container, containerButtons_G_I, text, textG, textI, activeLine } = styleContenActions;

const ContentActions = () => {

    const { expense, income } = useButtonsTransaction( (state)=> state.buttonsTransactionState );

    const setButtonsTransaction= useButtonsTransaction(
        (state)=>state.setButtonsTransactionState);

    const funtionActions = ( buttonType )=>{

        if( buttonType === 'I' ){
           setButtonsTransaction({
                expense: false,
                income: true
            })                          
        }
        if( buttonType === 'E' ){
            setButtonsTransaction({
                expense: true,
                income: false
            })
        }
        
    }

  return (
    <View style={container}>
        <View style={containerButtons_G_I}>
            <Text style={
                [text,textG, expense && activeLine]
            }
            onPress={()=>funtionActions('E')}
            >Gastos</Text>
        
            <Text style={
                [text,textI, income && activeLine]
            }
            onPress={()=>funtionActions('I')}
            >Ingresos</Text>
        </View>

        <CalendarComp/>

    </View>
  )
}

export default ContentActions
