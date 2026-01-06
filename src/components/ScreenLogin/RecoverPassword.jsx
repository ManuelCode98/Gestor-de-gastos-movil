import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { styleEmailLogin } from '../../styles/EmailLogin';
import { useState } from 'react';

const { container, input, button, text } = styleEmailLogin;

const RecoverPassword = ({ onBack }) => {
  const [email, setEmail] = useState('');

  const handleRecover = async () => {
    if (!email) {
      Alert.alert('Error', 'Ingresa tu correo');
      return;
    }

    try {
       await sendPasswordResetEmail(auth, email.trim());
      Alert.alert(
       'Correo enviado',
       'Si no lo ves, revisa la carpeta de SPAM'
      );
      onBack(); // vuelve al login
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={container}>
      <Text style={{ color: 'white', fontSize: 18, marginBottom: 20 }}>
        Escribe tu correo para recuperar tu contraseña
      </Text>

      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={input}
      />

      <Pressable style={button} onPress={handleRecover}>
        <Text style={text}>Enviar correo</Text>
      </Pressable>

      <Pressable onPress={onBack} style={{ marginTop: 15 }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          Volver al login
        </Text>
      </Pressable>
    </View>
  );
};

export default RecoverPassword;
