import { View, Text } from 'react-native';
import { AddContentActionsStyle } from '../../styles/AddContentActions';
import { useButtonsTransaction } from '../../store/StateGlobal';
import { useIconStore } from '../../store/useIconStore';


const {container, containerButtons_G_I, text, textG, textI, activeLine } = AddContentActionsStyle;

const AddContentActions = () => {

    const { selectedIcon, setSelectedIcon } = useIconStore();
    const { expense, income } = useButtonsTransaction( (state)=> state.buttonsTransactionState)

    const setButtonsTransaction = useButtonsTransaction(
        (state)=> state.setButtonsTransactionState);

    const funtionActions = ( buttonType )=>{

        if( buttonType === 'I' ){
            setButtonsTransaction({
                expense: false,
                income: true
            })
            setSelectedIcon({icon:null, categoryName:null})                          
        }
        if( buttonType === 'E' ){
            setButtonsTransaction({
                expense: true,
                income: false
            })
            setSelectedIcon({icon:null, categoryName:null})
        }
        
    }

    // console.log(gastos)
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
    </View>
  )
}

export default AddContentActions
