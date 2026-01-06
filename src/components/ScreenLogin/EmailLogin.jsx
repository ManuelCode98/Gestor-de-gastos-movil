import { useState } from 'react';
import { View, Text, Pressable, TextInput, Alert } from 'react-native';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { styleEmailLogin } from '../../styles/EmailLogin';

const { container, button, buttonDisabled, input, text } = styleEmailLogin;

const EmailLogin = ({ onRecover }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleAuth = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Completa email y contraseña');
      return;
    }

    setLoading(true);

    try {
      // 🔹 Intentamos LOGIN
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );
      console.log('LOGIN OK');

    } catch (error) {
      // Si no existe → lo creamos
      if (error.code === 'auth/invalid-credential') {
        try {
          await createUserWithEmailAndPassword(
            auth,
            email.trim(),
            password
          );
          console.log('USUARIO CREADO Y LOGUEADO');
          
        } catch (createError) {
          Alert.alert('Error', createError.message);
          console.log(createError)
        }
      } else {
        Alert.alert('Error', error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={container}>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={input}
      />

      <View style={{ position: 'relative' }}>
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={input}
        />

        <Pressable
          onPress={() => setShowPassword(!showPassword)}
          style={{
            position: 'absolute',
            right: 12,
            top: 12,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 18 }}>
            {showPassword ? '🙈' : '👁️'}
          </Text>
        </Pressable>
      </View>

      <Pressable
        style={({ pressed }) => [
          button,
          loading && buttonDisabled,
          pressed && { opacity: 0.8 },
        ]}
        disabled={loading}
        onPress={handleAuth}
      >
        <Text style={text}>Iniciar sesión con Gmail</Text>
      </Pressable>

      <Pressable onPress={onRecover} style={{ marginTop: 15 }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          ¿Olvidaste tu contraseña?
        </Text>
      </Pressable>

    </View>
  );
};

export default EmailLogin;

