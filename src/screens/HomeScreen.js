import { StatusBar } from 'expo-status-bar';
import { View, Pressable } from 'react-native'
import Header from '../components/ScreanHome/Header';
import ContentActions from '../components/ScreanHome/ContentActions';
import { HomeScreenStyle } from '../styles/HomeScreen';
import ShowContent from '../components/ScreanHome/ShowContent';
import Capital from '../components/ScreanHome/Capital';
import { Ionicons } from '@expo/vector-icons';
import { confirmLogout } from '../helpers/confirmLogout';
import { useAuthStore } from '../store/useAuthStore';

const { container, backgroundIcon, containerHeader } = HomeScreenStyle;

const HomeScreen = ({ navigation }) => {

  const logout = useAuthStore((state) => state.logout);

  return (
    <View style={container}>
      <StatusBar 
        backgroundColor="#000"
        style="light" 
      />
      <View
        style={containerHeader}
      >
        <Header />

        <Pressable
          onPress={() => confirmLogout(logout)}
          style={backgroundIcon}
        >
          <Ionicons name="log-out-outline" size={24} color="#fff" />
        </Pressable>
      </View>
      
      <ContentActions />
      <Capital navigation={navigation} />
      {/* ya esta configurada la lista */}
      <ShowContent/>
    </View>
  )
}

export default HomeScreen
