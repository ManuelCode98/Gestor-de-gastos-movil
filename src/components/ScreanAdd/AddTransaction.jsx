import { View, Text, TextInput, StyleSheet } from 'react-native';
import { AddTransactionStyle } from '../../styles/AddTransaction';
import { useValueTransaction } from '../../store/StateGlobal';

const { containerInput, input } = AddTransactionStyle;

const AddTransaction = () => {

  const inputTransactionState = useValueTransaction( (state)=>
    state.inputTransactionState
  )
  const setInputTransactionState = useValueTransaction( (state)=>
    state.setInputTransactionState
  )

   const onChangeNumber = ( text )=>{

    setInputTransactionState(text)
   }

  return (
    <>
      <View style={containerInput}>
        <TextInput
          keyboardType='numeric'
          onChangeText={ onChangeNumber }
          style={input}
          value={inputTransactionState}
        />
      </View>
    </>
  )
}



export default AddTransaction
