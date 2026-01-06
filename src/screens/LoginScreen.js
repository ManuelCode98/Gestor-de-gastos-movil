import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import EmailLogin from '../components/ScreenLogin/EmailLogin';
import { useEffect, useState } from 'react';
import { LoginScreenStyle } from '../styles/LoginScreen';
import RecoverPassword from '../components/ScreenLogin/RecoverPassword';


const { container, containerText, text } = LoginScreenStyle;

const LoginScreen = ({ navigation }) => {
  const [displayText, setDisplayText] = useState('');
  const [mode, setMode] = useState('login');
  const fullText = 'Bienvenido a tu gestor de gastos.';

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [displayText, fullText]);

  return (
    <View style={container}>
      <StatusBar backgroundColor="#000" style="light" />
      <View style={containerText}>
        <Text style={text}>{displayText}</Text>
      </View>
      {mode === 'login' ? (
        <EmailLogin onRecover={() => setMode('recover')} />
      ) : (
        <RecoverPassword onBack={() => setMode('login')} />
      )}
    </View>
  );
};



export default LoginScreen;