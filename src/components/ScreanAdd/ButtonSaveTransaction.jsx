import { View, Text, Pressable, } from "react-native";
import { ButtonSaveTransactionStyle } from "../../styles/ButtonSaveTransaction";
import { useValueTransaction, useButtonsTransaction } from "../../store/StateGlobal";
import { useIconStore } from '../../store/useIconStore';
import { formatDate } from '../../helpers/dateRange';
import { saveTransaction } from "../../services/transactionService";



const { container, text } = ButtonSaveTransactionStyle;

const ButtonSaveTransaction = () => {

  const { selectedIcon, setSelectedIcon } = useIconStore();

  const inputTransactionState = useValueTransaction(
    (state)=> state.inputTransactionState);

  const setInputTransactionState = useValueTransaction(
    (state)=> state.setInputTransactionState);

  const buttonsTransactionState = useButtonsTransaction(
    (state)=> state.buttonsTransactionState);

  const hasInputValue =
    inputTransactionState !== '' && Number(inputTransactionState) > 0;

  const isTransactionSelected =
    buttonsTransactionState.expense || buttonsTransactionState.income;

  const isEnabled = hasInputValue && selectedIcon.icon && isTransactionSelected;

   const handlePress = async() => {
    if (!isEnabled) return;
    
    const { icon, categoryName } = selectedIcon;

    const transaction = {
      amount: Number(inputTransactionState),
      type: buttonsTransactionState.expense ? 'expense' : 'income',
      icon: icon,
      category: categoryName,
      createdAt: formatDate(new Date()),
     
    };
    
    await saveTransaction( transaction, ()=>{
      //Limpiamos los estados
      setSelectedIcon({icon:null, categoryName:null});
      setInputTransactionState('');
    });
    
  };

  
  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => ({
        opacity: !isEnabled ? 0.4 : pressed ? 0.5 : 1,
      })}
    >
      <View style={container}>
        <Text style={text}>Añadir</Text>
      </View>
    </Pressable>
  )
}

export default ButtonSaveTransaction
