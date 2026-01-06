import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { AddScreenStyle } from '../styles/AddScreen';
import AddContentActions from '../components/ScreanAdd/AddContentActions';
import IconsTransactionG from '../components/ScreanAdd/IconsTransactionG';
import IconsTransactionI from '../components/ScreanAdd/IconsTransactionI';
import AddTransaction from '../components/ScreanAdd/AddTransaction';
import ButtonSaveTransaction from '../components/ScreanAdd/ButtonSaveTransaction';
import { useButtonsTransaction } from '../store/StateGlobal';
import BannerAd from '../components/Ads/BannerAd';


const { container } = AddScreenStyle;

const AddScreen = ({navigation}) => {

  const buttonsTransactions = useButtonsTransaction(
    (state)=> state.buttonsTransactionState);

  return (
    <View style={container}>
          <StatusBar 
            backgroundColor="#000"
            style="light" 
          />
          <AddContentActions/>
          <AddTransaction/>

          { buttonsTransactions.expense
            ? <IconsTransactionG/>
            :<IconsTransactionI/>
          }
          
          <ButtonSaveTransaction/>

          <BannerAd/>
        </View>
  )
};

export default AddScreen;